export const colors = {
  white: '#FFFFFF',
  black: '#212429',
  purple: '#5c6bc0',
  purpleSolid: '#3949ab',
  pink: '#ff8b8b',
  pinkSolid: '#e54b4b',
  grey1: '#f8f9fa',
  grey2: '#dde2e5',
  grey3: '#acb5bd',
  grey4: '#495057',
  green: '#66bb6a',
  red: '#c62828',
};

export const generalProps = {
  '--error': colors.red,
  '--success': colors.gree,
  '--primary': colors.purple,
  '--primary-dark': colors.purpleSolid,
  '--secondary': colors.pink,
  '--secondary-dark': colors.pinkSolid,
  '--white': colors.white,
  '--grey-1': colors.grey1,
  '--grey-2': colors.grey2,
  '--grey-3': colors.grey3,
};

export const lightTheme = {
  ...generalProps,
  '--main-bg': colors.white,
  '--text-primary': colors.black,
  '--text-secondary': colors.grey3,
  '--inner-text-color-primary': colors.grey4,
  '--inner-text-color-secondary': colors.grey2,
  '--grey-bg': colors.grey1,
};

export const darkTheme = {
  ...generalProps,
  '--main-bg': colors.black,
  '--text-primary': colors.white,
  '--text-secondary': colors.grey2,
  '--inner-text-color-primary': colors.grey2,
  '--inner-text-color-secondary': colors.grey3,
  '--grey-bg': colors.grey4,
};
