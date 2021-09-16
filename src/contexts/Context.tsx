import React from "react";
import { PlanetsContextProvider } from "./planets";

const Context: React.FC = ({ children }) => {
  return <PlanetsContextProvider>{children}</PlanetsContextProvider>;
};

export default Context;
