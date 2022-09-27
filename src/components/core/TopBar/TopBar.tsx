import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { palette } from "../../../styles/themes";

export const TopBar = ({ toggleTheme }: any) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.topBar.bg,
        color: theme.color,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.2rem 2rem",
      }}
    >
      <p
        style={{
          fontWeight: 900,
          letterSpacing: ".3rem",
          color: palette.lightSecondary,
        }}
      >
        MARKDOWN
      </p>
      <button
        onClick={() => toggleTheme()}
        style={{
          backgroundColor: theme.mainButton.bg,
          color: theme.mainButton.color,
          border: "none",
          borderRadius: ".2rem",
          padding: ".7rem 1rem",
          cursor: "pointer",
        }}
      >
        Change Theme
      </button>
    </div>
  );
};
