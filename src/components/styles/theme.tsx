interface ColorProps {
  black: string;
  white: string;
  primary: string;
  secondary: string;
  bright_secondary: string;
}

interface FontSizeProps {
  XL: number;
  L: number;
  R: number;
  S: number;
}

export interface ThemeProps {
  color: ColorProps;
  font: FontSizeProps;
}

const color: ColorProps = {
  black: '#000000',
  white: '#F7EFE5',
  primary: '#050C9C',
  secondary: '#3572EF',
  bright_secondary: '#A7E6FF',
};

const font: FontSizeProps = {
  XL: 8.0,
  L: 3.2,
  R: 1.6,
  S: 1.2,
};

const theme: ThemeProps = {
  color,
  font,
};

export default theme;
