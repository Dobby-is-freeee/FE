pipeline {
    agent any
    tools{
        git "git"
    }
    environment { 
        SLACK_CHANNEL = '#team_frontend_deploy'
        MESSAGE = "${env.JOB_NAME} [${env.BUILD_NUMBER}] \n url: ${env.BUILD_URL} \n 브랜치 : $REF \n 배포자 : $PUSHER_NAME ($PUSHER_EMAIL)"
        SUCCESS_MESSAGE = "SUCCESSFUL : ${MESSAGE} \n 배포에 성공했습니다. 🚀"
        ERROR_MESSAGE = "FAILED : ${MESSAGE} \n 배포 실패 했습니다. 오류 확인해주세요. 😱"
        START_MESSAGE = "STARTED : ${MESSAGE} \n 배포 준비 중입니다.🚦"
        BRANCH = "staging"
        REPO_URL="https://github.com/Dobby-is-freeee/FE"
        CREDENTIALS_ID ="GIT_ACCOUNT"
    }
    stages {
        stage("prepare"){
            steps{
                echo '=====================🟠 깃허브 소스코드 가져오는 중 🟠====================='
                git branch: "${BRANCH}", credentialsId: "${CREDENTIALS_ID}", url: "${REPO_URL}"
                sh  'ls -al'
            }
        }
        // CD 시작
        stage('start') {
            steps {
                echo '=====================🟢 START 🟢====================='
                slackSend (channel: "${SLACK_CHANNEL}", color: '#FFFF00', message: "${START_MESSAGE}")
            }
        }
        // 리액트 빌드 시작
        stage('build') {
            steps {
                script {
                    echo '=====================🔧 BUILD 🔧====================='
                    sh 'ls -al && git checkout'
                    sh "sudo yarn install"
                    sh "sudo yarn build"
                }
            }
        }
        // 리액트 도커에 deploy 
        stage('deploy') {
            steps {
                script {
                    echo '=====================🚀 DEPLOY 🚀====================='
                    sh "chmod +x ./staging.sh"
                    sh "./staging.sh"
                }
            }
        }
    }
    post {
        success {
            slackSend (channel: "${SLACK_CHANNEL}", color: '#00FF00', message: "${SUCCESS_MESSAGE}")       
        }
        failure {
            slackSend (channel: "${SLACK_CHANNEL}", color: '#FF0000', message: "${ERROR_MESSAGE}")       
        }
    }
}
