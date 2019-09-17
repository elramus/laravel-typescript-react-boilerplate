import C from './constants'

export const theme = {
  // Colors
  black: '#444',
  darkGray: '#616161',
  middleGray: '#b1b1b1',
  lightGray: '#F4F4F4',
  offWhite: '#FAFAFA',

  // Fonts
  primaryFont: 'Amatic SC, sans-serif',

  // Typographic module scale
  // Calculated from base font size with a ratio of 1.25. So, ms(0) is your
  // base font size, and you can go up and down from there.
  // Thanks to https://www.modularscale.com.
  ms: (modifier: number) => `${(C.baseFontSize * (1.25 ** modifier)).toFixed(2)}px`,
}

export type ThemeInterface = typeof theme
