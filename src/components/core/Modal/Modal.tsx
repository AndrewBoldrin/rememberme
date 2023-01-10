import { ReactElement } from "react";
import styled from "styled-components";
import { CloseIcon } from "../../utils/icons/CloseIcon";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
}

export const StyledModal = styled.div`
  z-index: 9999;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalContainer = styled.div`
  position: relative;
  margin: 1rem;
  display: block;
  padding: 4rem;
  background-color: ${(props) => props.theme.modal.bg};
  color: ${(props) => props.theme.modal.color};
  border-radius: 0.7rem;
  box-shadow: 0.3em 0.3rem 1.5rem #000;
`;

export const Modal = ({ isOpen, onClose, children }: IModal): ReactElement => {
  return (
    <>
      {isOpen && (
        <StyledModal
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <StyledModalContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <CloseIcon handleClose={onClose}></CloseIcon>
            {children}
          </StyledModalContainer>
        </StyledModal>
      )}
    </>
  );
};
