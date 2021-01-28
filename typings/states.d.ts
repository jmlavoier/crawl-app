interface InspectionType {
  keyword: string,
  id: string,
  status: string,
}

interface StateType {
  inspections: InspectionType[],
}

interface ActionType<P> {
  type: string,
  payload: P,
}

interface ProviderProps {
  children: React.ReactNode,
}

interface ProviderValue {
  state: StateType,
  setInspection: (inspection: InspectionType) => void,
}

interface SetInspectionPayloadType {
  inspection: InspectionType,
}
