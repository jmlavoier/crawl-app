import * as React from 'react';

import reducer, { initialState } from './reducer';
import { setInspection, rehydrate, setURLs } from './actions';

const Context = React.createContext<ProviderValue>({
  state: initialState,
  rehydrate: () => {},
  setInspection: () => {},
  setURLs: () => {},
});
Context.displayName = 'AppContext';

const { useReducer, useMemo } = React;

export const Provider = ({ children }: ProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({
    state,
    setInspection: (inspection: InspectionType) => dispatch(setInspection(inspection)),
    rehydrate: (inspections: InspectionType[]) => dispatch(rehydrate(inspections)),
    setURLs: (id: string, status: string, urls: string[]) => dispatch(setURLs(id, status, urls)),
  }), [state]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default Context;
