export type Action =
  | { type: "ADD_FILE"; payload: { uri: string; type: string } }
  | { type: "REMOVE_FILE"; payload: number }
  | { type: "CLEAR_FILES" };

export type State = { files: { uri: string; type: string }[] };

export const initialState: State = { files: [] };

export function fileReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_FILE":
      return { ...state, files: [...state.files, action.payload] };
    case "REMOVE_FILE":
      return {
        ...state,
        files: state.files.filter((_, index) => index !== action.payload),
      };
    case "CLEAR_FILES":
      return { ...state, files: [] };
    default:
      throw new Error("Invalid action type");
  }
}
