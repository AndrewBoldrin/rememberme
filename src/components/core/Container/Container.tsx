import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
  font-size: 1.8rem;
`;
