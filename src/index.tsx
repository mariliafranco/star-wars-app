import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import Context from "./contexts/Context";

ReactDOM.render(
  <Suspense fallback={null}>
    <Context>
      <App />
    </Context>
  </Suspense>,
  document.getElementById("root")
);
