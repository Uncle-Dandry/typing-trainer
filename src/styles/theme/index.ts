import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
import { createTheme } from '@mui/material/styles';

import type {
  TypographyFonts,
  PaletteColorOptions,
} from '../../createTheme';

export const breakpoints = createBreakpoints({
  values: {
    xxs: 480,
    xs: 768,
    sm: 992,
    md: 1125,
    lg: 1200,
    xl: 1400,
    xxl: 1600,
  },
});

export const palette: PaletteColorOptions = {
  common: {
    white: '#FFFFFF',
    black: '#000000',
  },
};

const fonts: TypographyFonts = {
  montserrat: 'Montserrat, sans-serif',
};

const theme = createTheme({
  breakpoints,
  palette,
  typography: {
    fonts,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: palette.common.black,
          fontFamily: 'Montserrat, sans-serif',
          isolation: 'isolate',
          backgroundColor: palette.common.white,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        },

        a: {
          color: 'inherit',
          textDecoration: 'none',
        },

        button: {
          fontFamily: fonts.montserrat,
          color: 'inherit',
          border: 'none',
          background: 'transparent',
          transition: 'opacity 0.3s',

          '&:disabled': {
            opacity: 0.5,
          },
        },

        'ul, ol': {
          listStyle: 'none',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export { default as createEmotionCache } from './createEmotionCache';

export default theme;
