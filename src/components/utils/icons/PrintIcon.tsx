import styled from "styled-components";

interface IPrintIcon {
  width: string;
  height: string;
  color: string;
  handleIconClick: () => void;
}

interface IPrintIconStyle {
  width: string;
  height: string;
  color: string;
}

export const StyledPrintIcon = styled.button<IPrintIconStyle>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  &:hover {
    transform: scale(1.2);
  }
  background-color: Transparent;
  border: none;
  cursor: pointer;
`;

export const PrintIcon = ({
  width,
  height,
  color,
  handleIconClick,
}: IPrintIcon) => {
  return (
    <StyledPrintIcon
      width={width}
      height={height}
      color={color}
      onClick={() => handleIconClick()}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path>
        </g>
      </svg>
    </StyledPrintIcon>
  );
};
