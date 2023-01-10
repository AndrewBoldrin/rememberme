import { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { useModal } from "../../../hooks/useModal";
import { palette } from "../../../styles/themes";
import { HelpIcon } from "../../utils/icons/HelpIcon";
import { MainButton } from "../Buttons/MainButton";
import { Help } from "../Help/Help";
import { Modal } from "../Modal/Modal";

export const TopBar = ({ toggleTheme }: any) => {
  const theme = useContext(ThemeContext);
  const { open, setOpen, onClose } = useModal();

  useEffect(() => {
    setOpen(true);
  }, [setOpen]);

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Modal isOpen={open} onClose={onClose}>
          <Help />
        </Modal>

        <HelpIcon
          width="2.5rem"
          height="2.5rem"
          color="#FFF"
          handleIconClick={() => setOpen(true)}
        />
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
