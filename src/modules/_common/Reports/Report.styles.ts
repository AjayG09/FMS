import { createUseStyles } from 'react-jss';
import { ComposedTheme } from '../../../theme';

export default createUseStyles(({ typography }: ComposedTheme) => ({
  layout: {
    display: 'flex',
    fontSize: typography.buttonLarge.fontSize,
    padding: [32, 16],
    justifyContent: 'center',
    gap: 50,
  },
  navContainer: {},
  content: {},
  root: {},
}));
