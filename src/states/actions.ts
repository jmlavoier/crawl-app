import {
  SET_INSPECTION,
} from './types';

export const setInspection = (inspection: InspectionType): ActionType => ({
  type: SET_INSPECTION,
  payload: {
    inspection,
  },
});
