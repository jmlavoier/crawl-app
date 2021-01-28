import {
  SET_INSPECTION,
  REHYDRATE,
} from './types';

export const initialState: StateType = {
  hydrated: false,
  inspections: [],
};

const reducer = (
  state: StateType,
  action: ActionTypes,
): StateType => {
  switch (action.type) {
    case SET_INSPECTION: {
      const {
        inspection,
      } = action.payload;

      return {
        ...state,
        inspections: [
          ...state.inspections,
          inspection,
        ],
      };
    }
    case REHYDRATE: {
      const {
        inspections,
      } = action.payload;

      return {
        ...state,
        hydrated: true,
        inspections,
      };
    }
    default: return state;
  }
};

export default reducer;
