import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  export interface BreakpointOverrides {
    xxs: true;
    xxl: true;
  }
}

export interface PaletteTypeCommon {
  white: string;
  black: string;
}

export interface PaletteColorOptions {
  common: PaletteTypeCommon;
}

declare module '@mui/material/styles/createPalette' {
  export interface TypeCommon extends PaletteTypeCommon {}

  export interface PaletteOptions {
    common: TypeCommon;
  }

  interface Palette extends PaletteOptions {}
}

export interface TypographyFonts {
  montserrat: string;
}

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    fonts: TypographyFonts;
  }

  interface Typography extends TypographyOptions {}
}
