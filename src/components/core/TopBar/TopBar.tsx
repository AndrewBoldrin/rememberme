import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { palette } from "../../../styles/themes";
import { MainButton } from "../Buttons/MainButton";

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
      <div>
        <MainButton
          style={{
            marginRight: "1rem",
          }}
          onClick={() => window.print()}
        >
          Print
        </MainButton>
        <MainButton onClick={() => toggleTheme()}>Change Theme</MainButton>
      </div>
    </div>
  );
};
