import { createUseStyles } from 'react-jss';
import { ComposedTheme } from '../../../theme';

export default createUseStyles(({ breakpoints, palette, typography }: ComposedTheme) => ({
  '@global': {
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    body: {
      fontFamily: typography.fontFamily,
      fontWeight: typography.fontWeight,
      margin: 0,
      padding: 0,
      background: palette.background,
    },
  },
  mainContainer: {
    '@media (max-width: 1024px)': {
      minWidth: breakpoints.values.md,
    },
  },
  navContainer: {},
  content: {},
  root: {},
}));
