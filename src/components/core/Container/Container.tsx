import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
  font-size: 1.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
