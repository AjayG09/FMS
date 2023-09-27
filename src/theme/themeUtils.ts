import { rgb as rgbContrast, RGBColor } from 'wcag-contrast';
import basePalette from './FMS/palette';

/**
 * Converts the given hex code to its RGB digits
 *
 * @param {string} hex - hex color code
 * @returns {number[]} RGB color numbers
 */
export const hexToRGBArray = (hex: string) => {
  const truncated = hex.length < 7;
  return hex
    ?.substring(1)
    ?.match(truncated ? /./g : /.{2}/g)
    ?.map((value) => (truncated ? `${value}${value}` : value))
    .map((value) => parseInt(value, 16));
};

/**
 * Converts the given color code to the array of RGB color numbers
 *
 * @param {string} color - hex or RGB color code
 * @returns {string[]} RGB color numbers
 */
export const getRGBArray = (color: string) =>
  color.startsWith('#')
    ? hexToRGBArray(color)
    : color.split(',').map((value) => {
        const start = value.indexOf('(') + 1;
        const end = value.indexOf(')');
        return value.substring(start, end === -1 ? undefined : end).trim();
      });

/**
 * Converts the given color to RGBA with the provided opacity
 *
 * @param {string} color - hex, RGB, or RGBA color code
 * @param {number} opacity - opacity value in the range 0...1
 * @returns {string} RGBA color code
 */
export const setOpacity = (color: string, opacity: number) => {
  const rgbArray = getRGBArray(color) || [];

  rgbArray[3] = opacity;

  return `rgba(${rgbArray.join(', ')})`;
};

/**
 * Returns the most contrasting text color for the given background from the palette
 *
 * @param {Object} palette - The theme palette object
 * @param {string} background - The background color code
 * @returns {string} The most contrasting text color
 */
export const getContrastText = (palette: typeof basePalette, background: string) => {
  const rgb = getRGBArray(background);
  const darkContrast = rgbContrast(rgb as RGBColor, getRGBArray(palette.text.dark) as RGBColor);
  const lightContrast = rgbContrast(rgb as RGBColor, getRGBArray(palette.text.light) as RGBColor);

  return darkContrast > lightContrast ? palette.text.dark : palette.text.light;
};

/** Curried version of `getContrastText` */
export const curriedContrastText = (palette: typeof basePalette) => (background: string) =>
  getContrastText(palette, background);
