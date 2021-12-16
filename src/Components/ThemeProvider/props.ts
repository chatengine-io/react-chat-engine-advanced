interface PaletteColor {
  main: string;
  light?: string;
  dark?: string;
  contrastText?: string;
}

interface Palette {
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
}

export interface Theme {
  palette: Palette;
}
