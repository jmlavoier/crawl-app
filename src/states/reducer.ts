import {
  SET_INSPECTION,
} from './types';

export const initialState: StateType = {
  inspections: [],
};

const reducer = (state: StateType, action: ActionType<SetInspectionPayloadType>): StateType => {
  switch (action.type) {
    case SET_INSPECTION: {
      const {
        inspection,
      } = action.payload;

      return {
        inspections: [
          ...state.inspections,
          inspection,
        ],
      };
    }
    default: return state;
  }
};

export default reducer;
