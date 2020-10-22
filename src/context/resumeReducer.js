import { GETUSERINPUT } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GETUSERINPUT:
      console.log(action.payload)
      return {
        ...state,
        userInput: {
          ...state.userInput,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
