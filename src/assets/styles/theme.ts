import { MediaQueryProps, ThemeUtilFunc } from 'types/styled';

const color = {
  primary: '#1763ad',
  secondary: '#0f4793',
  grays: ['#666666', '#414141', '#323232'],
  white: '#e7eef6',
  black: '#353535',
};

const sizes: MediaQueryProps = {
  mobile: '580px',
  tablet: '768px',
  desktop: '1284px',
};

const media = {
  mobile: `@media screen and (max-width: ${sizes.mobile})`,
  tablet: `@media screen and (max-width: ${sizes.tablet})`,
  desktop: `@media screen and (max-width: ${sizes.desktop})`,
};

/**
 * @type ThemeUtilFunc
 * styled-components Tagged templates 안에서 theme을 쉽게 가져올 수 있는 유틸 함수다.
 * ex) ${({theme})=>theme.media.desktop} ===> ${themeDesktop}
 */
const themeDesktop: ThemeUtilFunc = ({ theme: { media } }) => media.desktop;
const themeTablet: ThemeUtilFunc = ({ theme: { media } }) => media.tablet;
const themeMobile: ThemeUtilFunc = ({ theme: { media } }) => media.mobile;
const themePrimary: ThemeUtilFunc = ({ theme: { color } }) => color.primary;
const themeSecondary: ThemeUtilFunc = ({ theme: { color } }) => color.secondary;
const theme = {
  color,
  media,
};

export type Theme = typeof theme;
export { theme, themeDesktop, themeTablet, themeMobile, themePrimary, themeSecondary };
