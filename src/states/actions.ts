import {
  SET_INSPECTION,
  REHYDRATE,
} from './types';

export const setInspection = (
  inspection: InspectionType,
): ActionTypes => ({
  type: SET_INSPECTION,
  payload: {
    inspection,
  },
});

export const rehydrate = (
  inspections: InspectionType[],
): ActionTypes => ({
  type: REHYDRATE,
  payload: {
    inspections,
  },
});
