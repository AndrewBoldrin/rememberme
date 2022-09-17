import React, { ReactElement } from "react";
import { FormatedOutPut } from "./FormatedOutPut/FormatedOutPut";
import { InputArea } from "./InputArea/InputArea";
import { Container } from "../../components/core/Container/Container";

export const Index = (): ReactElement => {
  return (
    <Container>
      <InputArea />
      <FormatedOutPut />
    </Container>
  );
};
