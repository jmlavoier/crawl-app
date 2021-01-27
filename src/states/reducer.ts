import {
  SET_INSPECTION,
} from './types';

export const initialState: StateType = {
  inspections: [],
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case SET_INSPECTION: return state;
    default: return state;
  }
};

export default reducer;
