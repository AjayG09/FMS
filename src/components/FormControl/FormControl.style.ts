import { createUseStyles } from 'react-jss';
import { ComposedTheme } from '../../theme';

export default createUseStyles(({palette, typography, spacing}: ComposedTheme) => ({
	container: {
    width: '100%',
    color: palette.colors.white
  },
  controlGroup: {
    paddingTop: spacing.unit,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    '& input': {
      background: 'transparent',
      borderRadius: 5,
      padding: [3, 5],
      border: `2px solid ${palette.colors.white}`,
      color: palette.colors.white,
      fontSize: typography.fontSize
    },
    '& label': {
      marginBottom: 5
    }
  },
  controlError: {
    '$controlGroup': {
      '& label': {
        color: palette.colors.white,
        background: 'rgba(255, 0, 0, 0.7)',
        marginBottom: 5,
        display: 'inline-block',
        width: 'fit-content',
        padding: [2, 6],
        borderRadius: 10
      }
    }
  },
}))