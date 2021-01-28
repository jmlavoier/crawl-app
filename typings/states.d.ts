interface InspectionType {
  keyword: string,
  id: string,
}

interface InspectionGetResponseType {
  id: string,
  status: string,
  urls: string[],
}

interface InspectionURLsType {
  [id: string]: InspectionGetResponseType,
}

interface StateType {
  hydrated: boolean,
  inspections: InspectionType[],
  urls: InspectionURLsType,
}

interface ProviderProps {
  children: React.ReactNode,
}

interface ProviderValue {
  state: StateType,
  setInspection: (inspection: InspectionType) => void,
  rehydrate: (inspections: InspectionType[]) => void,
  setURLs: (inspectionId: string, status: string, urls: string[]) => void,
}

interface SetInspectionActionType {
  type: 'SET_INSPECTION',
  payload: {
    inspection: InspectionType,
  },
}

interface RehydrateActionType {
  type: 'REHYDRATE',
  payload: {
    inspections: InspectionType[],
  },
}

interface SetURLsActionType {
  type: 'SET_URLS',
  payload: InspectionGetResponseType,
}

type ActionTypes = SetInspectionActionType | RehydrateActionType | SetURLsActionType;
