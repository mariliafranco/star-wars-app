import React, { createContext, useState } from "react";
import { IPlanetsResults } from "../../services/planetList.api";

interface IPlanetsContext {
  state: IPlanetsResults;
  setState: React.Dispatch<React.SetStateAction<IPlanetsResults>>;
}

const DEFAULT_VALUE: IPlanetsContext = {
  state: {
    results: [],
    filterResults: [],
    filterNumericResults: undefined,
  },
  setState: () => {},
};

const PlanetsContext = createContext<IPlanetsContext>(DEFAULT_VALUE);

export const PlanetsContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <PlanetsContext.Provider value={{ state, setState }}>
      {children}
    </PlanetsContext.Provider>
  );
};

export default PlanetsContext;
