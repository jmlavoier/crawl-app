interface InspectionType {
  keyword: string,
  id: string,
  status: string,
}

interface StateType {
  inspections: InspectionType[],
}

interface ActionType {
  type: string,
  payload: unknown,
}

interface ProviderProps {
  children: React.ReactNode,
}

interface ProviderValue {
  state: StateType,
  setInspection?: (inspection: InspectionType) => void,
}
