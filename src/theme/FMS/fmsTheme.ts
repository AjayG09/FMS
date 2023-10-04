import deepMerge from 'deepmerge';
import { curriedContrastText } from '../themeUtils';
import basePalette from './palette';
import spacing from './spacing';
import breakpoints from './breakpoints';
import transitions from './transitions';
import typographyFn from './typography';
import variantsFn from './variants';
import zIndex from './zIndex';
import shadows from './shadows';

export interface IComposedTheme {
  palette: typeof basePalette;
  spacing: typeof spacing;
  breakpoints: typeof breakpoints;
  transitions: typeof transitions;
  typography: ReturnType<typeof typographyFn>;
  zIndex: typeof zIndex;
  shadows: typeof shadows;
}

export type TMergedPaletteVariants = {
  variants?: ReturnType<typeof variantsFn>;
} & IComposedTheme['palette'];

export interface IMergedTheme extends Omit<IComposedTheme, 'palette'> {
  name: string;
  getContrastText(background: string): void;
  palette: TMergedPaletteVariants;
  legacy?: boolean;
}
/* eslint-disable  @typescript-eslint/no-explicit-any */
type obj = { [key: string]: any };

export default (inputTheme: obj = {}) => {
  const palette = inputTheme.palette ? deepMerge(basePalette, inputTheme.palette) : basePalette;
  const variants = variantsFn({ palette });
  const typography = typographyFn({ palette });
  const base = {
    palette: { ...palette, variants },
    spacing,
    breakpoints,
    transitions,
    typography,
    zIndex,
    shadows,
    '@global': {
      body: {
        background: '#568EA6',
      },
    },
  };

  const merged = deepMerge.all<IMergedTheme>([
    base,
    inputTheme,
    {
      name: 'FMS',
      getContrastText: curriedContrastText(base.palette),
    },
  ]);

  return merged;
};
