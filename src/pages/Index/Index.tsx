import React, { ReactElement, useState, useRef } from "react";
import { FormatedOutPut } from "./FormatedOutPut/FormatedOutPut";
import { InputArea } from "./InputArea/InputArea";
import { Container } from "../../components/core/Container/Container";
import { ThemeProvider } from "styled-components";
import { themes } from "../../styles/themes";
import { TopBar } from "../../components/core/TopBar/TopBar";
import { PrintArea } from "../../components/utils/PrintArea/PrintArea";

export const Index = (): ReactElement => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [inputLines, setInputLines] = useState([]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <ThemeProvider theme={isDark ? themes.dark : themes.light}>
        <TopBar toggleTheme={toggleTheme} />
        <Container>
          <InputArea changeInputLine={setInputLines} />
          <FormatedOutPut inputLines={inputLines} />
          <PrintArea>
            <FormatedOutPut inputLines={inputLines} />
          </PrintArea>
        </Container>
      </ThemeProvider>
    </>
  );
};
