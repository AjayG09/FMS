import basePalette from './palette';

const roboto = 'Roboto, Helvetica, Arial, sans-serif';
const barlowCondensed = `"Barlow Condensed", ${roboto}`;
const robotoCondensed = `"Roboto Condensed", ${roboto}`;
const light = 300;
const regular = 400;
const medium = 500;
const bold = 700;

const typography = ({ palette }: { palette: typeof basePalette }) => ({
  fontFamily: roboto,
  fontSize: 16,
  fontWeight: regular,
  fontWeightLight: light,
  fontWeightRegular: regular,
  fontWeightMedium: medium,
  fontWeightHeavy: bold,
  text: {
    fontFamily: roboto,
    fontSize: 16,
    fontWeight: regular,
  },
  title: {
    color: '#000',
    fontFamily: barlowCondensed,
    fontSize: 50,
    fontWeight: light,
  },
  h1: {
    color: palette.text.dark,
    fontFamily: barlowCondensed,
    fontSize: 50,
    fontWeight: light,
    lineHeight: '75px',
  },
  h2: {
    fontFamily: roboto,
    fontSize: 30,
    fontWeight: medium,
  },
  h3: {
    fontFamily: robotoCondensed,
    fontSize: 20,
    fontWeight: regular,
    textTransform: 'uppercase',
  },
  h4: {
    fontFamily: roboto,
    fontSize: 20,
    fontWeight: medium,
  },
  h5: {
    fontFamily: robotoCondensed,
    fontSize: 16,
    fontWeight: bold,
    textTransform: 'uppercase',
  },
  label: {
    color: palette.text.midGray,
    fontFamily: roboto,
    fontSize: 12,
    fontWeight: bold,
    textTransform: 'uppercase',
  },
  labelSmall: {
    color: palette.text.midGray,
    fontFamily: roboto,
    fontSize: 10,
    fontWeight: bold,
    textTransform: 'uppercase',
    lineHeight: '12px',
  },
  smallText: {
    color: palette.text.dark,
    fontFamily: roboto,
    fontSize: 14,
    fontWeight: regular,
    lineHeight: '24px',
  },
  xtraSmallText: {
    color: palette.text.dark,
    fontFamily: roboto,
    fontSize: 12,
    fontWeight: regular,
    lineHeight: '16px',
  },
  tinyText: {
    color: palette.text.dark,
    fontFamily: roboto,
    fontSize: 10,
    fontWeight: regular,
    lineHeight: '16px',
  },
  buttonLarge: {
    color: palette.text.dark,
    fontFamily: robotoCondensed,
    fontSize: 18,
    fontWeight: regular,
    lineHeight: '24px',
  },
  buttonMedium: {
    color: palette.text.dark,
    fontFamily: robotoCondensed,
    fontSize: 16,
    fontWeight: regular,
    lineHeight: '24px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  buttonSmall: {
    color: palette.text.dark,
    fontFamily: robotoCondensed,
    fontSize: 14,
    fontWeight: regular,
    lineHeight: '16px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default typography;
