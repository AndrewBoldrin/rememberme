import { ReactElement } from "react";

export const Help = (): ReactElement => {
  return (
    <div
      style={{
        lineHeight: 2,
        fontFamily: "sans-serif",
      }}
    >
      <h3
        style={{
          marginBottom: "2rem",
        }}
      >
        Use those special symbols in front of your text lines to format your
        text and see the results o the right side of the page
      </h3>
      <p>{"# title"}</p>
      <p>{"## subtitle"}</p>
      <p>{"### medium text"}</p>
      <p>{"#### small text"}</p>
      <p>{"* Marked Text"}</p>
      <p>{"- List item 1"}</p>
      <p>{"- List item 2"}</p>
      <p>{"> Highlight Important Text"}</p>
      <p>{">> Highlight Text"}</p>
    </div>
  );
};
