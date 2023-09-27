import basePalette from './palette';

export default ({ palette }: { palette: typeof basePalette }) => ({
  primary: {
    light: palette.primary.light,
    normal: palette.primary.normal,
    dark: palette.primary.dark,
    contrastText: palette.text.light,
  },
  secondary: {
    light: palette.colors.alizarinCrimson,
    normal: palette.colors.silver,
    dark: palette.colors.red,
    contrastText: palette.text.dark,
  },
  success: {
    light: palette.money.light,
    normal: palette.money.normal,
    dark: palette.money.dark,
    contrastText: palette.text.light,
  },
  positive: {
    light: palette.money.light,
    normal: palette.money.normal,
    dark: palette.money.dark,
    contrastText: palette.text.light,
  },
  warning: {
    light: palette.colors.mustard,
    normal: palette.colors.yellowOrange,
    dark: palette.colors.mustard,
    contrastText: palette.text.light,
  },
  info: {
    light: palette.info,
    normal: palette.info,
    dark: palette.info,
    contrastText: palette.text.light,
  },
  error: {
    light: palette.error,
    normal: palette.error,
    dark: palette.error,
    contrastText: palette.text.light,
  },
});
