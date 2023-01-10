import React, { ReactElement, useEffect } from "react";
import { Index } from "./pages/Index/Index";

const App = (): ReactElement => {
  useEffect(() => {
    document.title = "markdown";
  });

  return (
    <div>
      <Index />
    </div>
  );
};

export default App;
