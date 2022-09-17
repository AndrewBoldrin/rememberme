import React, { ReactElement } from "react";
import { FormatedOutPut } from "./FormatedOutPut/FormatedOutPut";
import { InputArea } from "./InputArea/InputArea";

export const Index = (): ReactElement => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        fontSize: "1.8rem",
      }}
    >
      <InputArea />
      <FormatedOutPut />
    </div>
  );
};
