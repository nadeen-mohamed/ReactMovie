
const INITIAL_STATE = {
    list: [],
  };
  
  export default function MovieReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "MOVIESLIST":
        return {
          ...state,
          list: action.payload,
        };
      default:
        return state;
    }
  }
  