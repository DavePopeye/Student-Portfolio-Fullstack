export default function (state = {}, action) {
  switch (action.type) {
    case "SET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
}
