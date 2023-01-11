import { ReactElement, useState } from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
  fontsize: 1rem;
  border: none;
  border-right: 1px solid ${(props) => props.theme.color};
  @media (max-width: 700px) {
    border-right: none;
  }
`;

const StyledInputContainer = styled.div`
  height: 100vh;
  padding: 1rem;
`;

export const InputArea = ({ changeInputLine }: any): ReactElement => {
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (newValue: string) => {
    setInputText(newValue);
    const textLines = newValue.split("\n\n");
    changeInputLine(textLines);
  };

  return (
    <StyledInputContainer>
      <StyledTextArea
        placeholder={`Insert your text here!\n\n Follow the examples:\n\n # title\n\n ## subtitle\n\n ### medium text\n\n #### small text\n\n * Marked Text\n\n - List item 1\n\n - List item 2\n\n > Highlight Important Text\n\n >> Highlight Text\n\nYou can see this clicking in them help button.`}
        defaultValue={inputText}
        onChange={(e) => handleInputChange(e.currentTarget.value)}
      ></StyledTextArea>
    </StyledInputContainer>
  );
};
