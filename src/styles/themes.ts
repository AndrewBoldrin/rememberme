export const palette = {
  main: "#1F2126",
  lightMain: "#2C2D30",
  secondary: "#818286",
  lightSecondary: "#FFFFFF",
  contrast: "#D95F43",
  lightContrast: "#F2C4C4",
  lightGrey: "#ccc",
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
    modal: {
      bg: "#332F2D",
      color: "white",
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
    modal: {
      bg: "#FFF",
      color: "#000",
    },
    bg: palette.lightSecondary,
    color: palette.main,
  },
};
