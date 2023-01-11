import { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { useModal } from "../../../hooks/useModal";
import { palette } from "../../../styles/themes";
import { ChangeThemeIcon } from "../../utils/icons/ChangeThemeIcon";
import { HelpIcon } from "../../utils/icons/HelpIcon";
import { PrintIcon } from "../../utils/icons/PrintIcon";
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
          maxWidth: "10rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexGrow: 1,
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

        <PrintIcon
          width="2.5rem"
          height="2.5rem"
          color="#FFF"
          handleIconClick={() => window.print()}
        />

        <ChangeThemeIcon
          width="2.5rem"
          height="2.5rem"
          color="#FFF"
          handleIconClick={() => toggleTheme()}
        />
      </div>
    </div>
  );
};
