import React, { ReactElement, useContext, useState } from "react";
import { ThemeContext } from "styled-components";

export const InputArea = ({ changeInputLine }: any): ReactElement => {
  const theme = useContext(ThemeContext);
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (newValue: string) => {
    setInputText(newValue);
    const textLines = newValue.split("\n\n");
    changeInputLine(textLines);
  };

  return (
    <div
      style={{
        height: "100vh",
        padding: "1rem",
      }}
    >
      <textarea
        style={{
          width: "100%",
          height: "100%",
          padding: 0,
          margin: 0,
          backgroundColor: theme.bg,
          color: theme.color,
          fontSize: "1rem",
          border: "none",
          borderRight: `1px solid ${theme.color}`,
        }}
        placeholder={`Insert your text here!\n\n Follow the examples:\n\n # title\n\n ## subtitle\n\n ### medium text\n\n #### small text\n\n * Marked Text\n\n - List item 1\n\n - List item 2\n\n > Highlight Important Text\n\n >> Highlight Text\n\nYou can see this clicking in them help button.`}
        defaultValue={inputText}
        onChange={(e) => handleInputChange(e.currentTarget.value)}
      ></textarea>
    </div>
  );
};
