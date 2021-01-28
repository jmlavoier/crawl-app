import * as React from 'react';

import reducer, { initialState } from './reducer';
import { setInspection } from './actions';

const Context = React.createContext<ProviderValue>({
  state: initialState,
  setInspection: () => {},
});
Context.displayName = 'AppContext';

const { useReducer, useMemo } = React;

export const Provider = ({ children }: ProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({
    state,
    setInspection: (inspection: InspectionType) => dispatch(setInspection(inspection)),
  }), [state]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default Context;
