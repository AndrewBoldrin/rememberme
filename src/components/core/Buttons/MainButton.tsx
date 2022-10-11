import styled from "styled-components";

export const MainButton = styled.button`
  background: ${(props) => props.theme.mainButton.bg};
  color: ${(props) => props.theme.mainButton.color};
  border: none;
  borderradius: 0.2rem;
  padding: 0.7rem 1rem;
  cursor: pointer;
`;
