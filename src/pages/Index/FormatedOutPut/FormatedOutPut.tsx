import React, { ReactElement } from "react";
import { palette } from "../../../styles/themes";

interface IElements {
  [index: string]: Object;
}

var elements = {} as IElements;

elements = {
  "#": {
    fontSize: "2.5rem",
  },
  "##": {
    fontSize: "2rem",
    color: palette.secondary,
  },
  "###": {
    fontSize: "1.5rem",
    color: palette.secondary,
  },
  "####": {
    color: palette.secondary,
  },
  "*": {
    color: palette.contrast,
  },
  "-": {
    marginLeft: "4rem",
    display: "list-item",
  },
  ">": {
    marginBlock: "3rem",
    padding: "2rem",
    backgroundColor: `${palette.lightMain}`,
    borderLeft: `5px solid ${palette.contrast}`,
  },
  ">>": {
    marginBlock: "3rem",
    padding: "2rem",
    backgroundColor: `${palette.lightMain}`,
  },
};

export const FormatedOutPut = ({ inputLines }: any): ReactElement => {
  return (
    <div
      style={{
        height: "100vh",
        margin: "1rem 1rem 1rem 0",
        fontSize: "1.2rem",
      }}
    >
      {inputLines.map((line: string, index: number) => {
        const element = line.split(" ")[0];
        const formatedText = line.slice(element.length, line.length);
        return (
          <div key={index} style={elements![element]}>
            {formatedText}
          </div>
        );
      })}
    </div>
  );
};
