import { createUseStyles } from 'react-jss';
import { ComposedTheme } from '@/theme';

export default createUseStyles(({ palette, spacing, typography }: ComposedTheme) => ({
  layout: {
    display: 'flex',
    padding: spacing.unit * 2,
    flexDirection: 'column',
    justifyContent: 'center',
    border: `1px solid ${palette.colors.blueStone}`,
    margin: spacing.unit,
    '& h2': {
      marginTop: 0,
    },
  },
  section: {
    padding: spacing.unit * 2,
    display: 'flex',
  },
  title: {
    minWidth: 70,
    marginRight: spacing.unit * 6,
  },
  navContainer: {},
  content: {
    width: '100%',
    padding: spacing.unit,
    border: `1px solid ${palette.colors.blueStone}`,
    '& label': {
      color: palette.colors.mineShaft,
    },
    '& $controlGroup': {
      flexDirection: 'row',
    },
  },
  input: {
    '& label': {
      minWidth: 200,
    },
    '& input': {
      borderRadius: 0,
      marginLeft: spacing.unit * 8,
      color: '#000',
      border: '1px solid #000',
    },
    '& > div': {
      alignItems: 'center',
      flexDirection: 'row',
    },
  },
  contentControls: {
    display: 'flex',

    '& div': {
      width: 'inherit',
      margin: 0,
      padding: 0,
      justifyContent: 'flex-end',
      flexDirection: 'row-reverse',
      '& input, & label': {
        margin: 0,
        background: palette.colors.white,
      },
      "& label:not(input[type='radio'] + label)": {
        marginRight: spacing.unit,
      },
      '& input': {
        margin: [0, spacing.unit],
      },
    },
  },
  buttons: {
    margin: spacing.unit,
    '& button': {
      '&:first-child': {
        marginRight: spacing.unit,
      },
      padding: [spacing.unit, spacing.unit * 2],
    },
  },
  outputPdf: {
    margin: spacing.unit,
  },
  label: {},
  inputs: {},
  controls: {
    display: 'flex',

    '& $inputs': {
      display: 'flex',
    },

    '& $label': {
      minWidth: 200,
      marginRight: spacing.unit * 8,
      color: palette.colors.mineShaft,
    },
    '& label': {
      margin: 0,
      minWidth: 'inherit',
    },
    '& input': {
      margin: [0, spacing.unit],
    },
  },
  border: {
    border: '1px solid #000',
    padding: spacing.unit,
  },
  controlGroup: {},
  checkbox: {
    display: 'flex',
    '& > div': {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      padding: 0,
      '& label': { margin: 0 },
    },
  },
  dFlex: {
    display: 'flex',
  },
}));
