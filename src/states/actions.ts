import {
  SET_INSPECTION,
} from './types';

export const setInspection = (
  inspection: InspectionType,
): ActionType<SetInspectionPayloadType> => ({
  type: SET_INSPECTION,
  payload: {
    inspection,
  },
});
