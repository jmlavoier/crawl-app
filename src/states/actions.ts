import {
  SET_INSPECTION,
  REHYDRATE,
  SET_URLS,
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

export const setURLs = (
  id: string,
  status: string,
  urls: string[],
): ActionTypes => ({
  type: SET_URLS,
  payload: {
    id,
    status,
    urls,
  },
});
