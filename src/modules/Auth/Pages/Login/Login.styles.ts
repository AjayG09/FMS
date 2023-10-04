import { createUseStyles } from 'react-jss';
import { ComposedTheme } from '../../../../theme';

export default createUseStyles(({ palette, spacing, typography }: ComposedTheme) => ({
  loginForm: {
    width: '30%',
    margin: [0, 'auto'],
    fontSize: '1em',
    backgroundColor: palette.colors.metallicBlue,
    color: palette.colors.white,
    padding: '1em',
    borderRadius: spacing.unit,
    minWidth: 360,
    textAlign: 'left',
    marginTop: spacing.unit * 3,
  },

  button: {
    border: `3px solid #568EA6`,
    outline: 'none',
    color: palette.colors.white,
    padding: '.75em',
    borderRadius: '.5em',
    background: 'transparent',
    transitionProperty: 'box-shadow, border',
    transitionDuration: '500ms',
    transitionTimingFunction: 'ease',
    fontSize: typography.buttonMedium.fontSize,
    marginTop: spacing.unit * 3,

    '&:hover': {
      boxShadow: '3px 8px 15px hsl(0deg 0% 0% / 19%)',
      border: '3px solid #FFF',
    },
  },
}));
