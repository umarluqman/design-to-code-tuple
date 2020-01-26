import { theme as base } from "@chakra-ui/core";

const fonts = { ...base.fonts, mono: `'Menlo', monospace` };

const breakpoints = ["40em", "52em", "64em"];

const theme = {
  ...base,
  colors: {
    ...base.colors,
    black: "#16161D",

    primary: {
      500: "#5B67C9"
    }
  },
  fonts,
  breakpoints
};

export default theme;
