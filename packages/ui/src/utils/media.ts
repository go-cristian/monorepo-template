import { css, SerializedStyles } from '@emotion/core'

export interface Breakpoints {
  xsm: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const breakpoints: Breakpoints = {
  xsm: 0,
  xs: 375,
  sm: 768,
  md: 1024,
  lg: 1440,
  xl: 2000,
}

export interface MediaQuery {
  xs(template: TemplateStringsArray): SerializedStyles;
  sm(template: TemplateStringsArray): SerializedStyles;
  md(template: TemplateStringsArray): SerializedStyles;
  lg(template: TemplateStringsArray): SerializedStyles;
  xl(template: TemplateStringsArray): SerializedStyles;
}

const templateOf = (breakpoint: string) => (template: TemplateStringsArray): SerializedStyles => css`
  @media (min-width: ${breakpoints[breakpoint]}px) {
    ${css(template)};
  }
`

/**
 * Util for add media queries to styled components based on the breakpoints
 *
 * Example:
 *
 * const Button = styled('button')`
 *  color: red;
 *  ${media.md`
 *    color: blue;
 *  `}
 * `
 */
const media: MediaQuery = {
  xs: templateOf('xs'),
  sm: templateOf('sm'),
  md: templateOf('md'),
  lg: templateOf('lg'),
  xl: templateOf('xl'),
}

export default media
