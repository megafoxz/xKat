import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  dark: '#191929',
  // colors
  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  lightGray5: '#eaeaea',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 15,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'MavenPro-Regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'MavenPro-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {
    fontFamily: 'MavenPro-Black',
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontSize: SIZES.h5, lineHeight: 20},
  body1: {
    fontFamily: 'MavenPro-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'MavenPro-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'MavenPro-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'MavenPro-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'MavenPro-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
  noResult: {fontFamily: '', fontSize: SIZES.body5, lineHeight: 20},
  thin: {fontWeight: '100'}, // Thin
  ultraLight: {fontWeight: '200'}, // Ultra Light
  light: {fontWeight: '300'}, // Light
  regular: {fontWeight: '400'}, // Regular
  medium: {fontWeight: '500'}, // Medium
  semibold: {fontWeight: '600'}, // Semibold
  bold: {fontWeight: '700'}, // Bold
  heavy: {fontWeight: '800'}, // Heavy
  black: {fontWeight: '900'}, // Black
  //Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
