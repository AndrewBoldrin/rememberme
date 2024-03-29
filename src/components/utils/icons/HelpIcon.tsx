import styled from "styled-components";

interface IHelpIcon {
  width: string;
  height: string;
  color: string;
  handleIconClick: () => void;
}

interface IHelpIconStyle {
  width: string;
  height: string;
  color: string;
}

export const StyledHelpIcon = styled.button<IHelpIconStyle>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  &:hover {
    transform: scale(1.2);
  }
  background-color: Transparent;
  border: none;
  cursor: pointer;
`;

export const HelpIcon = ({
  width,
  height,
  color,
  handleIconClick,
}: IHelpIcon) => {
  return (
    <StyledHelpIcon
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
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
        </g>
      </svg>
    </StyledHelpIcon>
  );
};
