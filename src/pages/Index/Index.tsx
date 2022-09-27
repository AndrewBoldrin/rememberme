import React, { ReactElement, useState } from "react";
import { FormatedOutPut } from "./FormatedOutPut/FormatedOutPut";
import { InputArea } from "./InputArea/InputArea";
import { Container } from "../../components/core/Container/Container";
import { ThemeProvider } from "styled-components";
import { themes } from "../../styles/themes";

export const Index = (): ReactElement => {
  const [isDark, setIsDark] = useState<boolean>(true);
  return (
    <>
      <ThemeProvider theme={isDark ? themes.dark : themes.light}>
        <Container>
          <InputArea />
          <FormatedOutPut />
        </Container>
      </ThemeProvider>
    </>
  );
};
