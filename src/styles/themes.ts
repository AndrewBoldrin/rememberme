export const palette = {
  main: "#1F2126",
  lightMain: "#2C2D30",
  secondary: "#818286",
  lightSecondary: "#FFFFFF",
  contrast: "#D95F43",
  lightContrast: "#F2C4C4",
};

export const themes = {
  dark: {
    topBar: {
      bg: palette.lightMain,
    },
    mainButton: {
      bg: palette.contrast,
      color: palette.lightSecondary,
    },
    bg: palette.main,
    color: palette.lightSecondary,
  },
  light: {
    topBar: {
      bg: palette.main,
    },
    mainButton: {
      bg: palette.lightContrast,
      color: palette.main,
    },
    bg: "white",
    color: "black",
  },
};
