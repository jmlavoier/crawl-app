import {
  SET_INSPECTION,
  REHYDRATE,
  SET_URLS,
} from './types';

export const initialState: StateType = {
  hydrated: false,
  inspections: [],
  urls: {},
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

    case SET_URLS: {
      const {
        id,
        status,
        urls,
      } = action.payload;

      return {
        ...state,
        urls: {
          ...state.urls,
          [id]: {
            id,
            status,
            urls,
          },
        },
      };
    }

    default: return state;
  }
};

export default reducer;
