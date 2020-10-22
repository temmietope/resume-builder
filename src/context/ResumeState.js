import React, { useReducer } from "react";
import ResumeContext from "./resumeContext";
import resumeReducer from "./resumeReducer";

import { GETUSERINPUT } from "./types";

const ResumeState = (props) => {
  const initialState = {
    userInput: {
      name: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      country: "",
    },
  };
  const [state, dispatch] = useReducer(resumeReducer, initialState);

  const updateUserInput = (name, value) => {
    dispatch({
      type: GETUSERINPUT,
      payload: { name: name, value: value },
    });
  };
  return (
    <ResumeContext.Provider
      value={{
        userInput: state.userInput,
        updateUserInput,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeState;
