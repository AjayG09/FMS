import { createUseStyles } from 'react-jss';
import { ComposedTheme } from '../../theme';


export default createUseStyles(({ palette, spacing }: ComposedTheme) => ({
  '@keyframes rotate': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    margin: [spacing.unit * 3, 0],

    '&::before': {
      content: '""',
      width: ({ size }: { size: number | string }) => size || 24,
      height: ({ size }: { size: number | string }) => size || 24,
      border: [4, 'solid'],
      borderLeftColor: 'transparent',
      borderRadius: '50%',
      color: palette.colors.lochmara,
      marginRight: 8,
      animationDuration: '1s',
      animationIterationCount: 'infinite',
      animationName: '$rotate',
      animationTimingFunction: 'linear',
    },
  },
}))
