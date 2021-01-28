interface InspectionType {
  keyword: string,
  id: string,
}

interface StateType {
  hydrated: boolean,
  inspections: InspectionType[],
}

interface ProviderProps {
  children: React.ReactNode,
}

interface ProviderValue {
  state: StateType,
  setInspection: (inspection: InspectionType) => void,
  rehydrate: (inspections: InspectionType[]) => void,
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

type ActionTypes = SetInspectionActionType | RehydrateActionType;
