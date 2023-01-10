import styled from "styled-components";
import { ReactElement } from "react";
import { palette } from "../../../styles/themes";

const StyledSvg = styled.svg`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

interface ICloseIcon {
  handleClose: () => void;
}

export const CloseIcon = ({ handleClose }: ICloseIcon): ReactElement => {
  return (
    <>
      <StyledSvg
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onClick={handleClose}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="icomoon-ignore"> </g>
          <path
            d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z"
            fill={palette.lightGrey}
          >
            {" "}
          </path>{" "}
        </g>
      </StyledSvg>
    </>
  );
};
