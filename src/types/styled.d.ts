import { Theme } from 'styles/theme';
import { CSSProp } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
// styled-components/macro 사용하기 위한 재정의다.
declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}

type ThemeProp = { theme: Theme };
declare type ThemeUtilFunc = ({ theme }: ThemeProp) => string;
declare type MediaQueryProps = {
  mobile: string;
  tablet: string;
  desktop: string;
};
