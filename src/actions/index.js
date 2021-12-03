export const trying = () => async (dispatch) => {
  dispatch({ type: "LOGIN", payload: "Micheal" });
};

export const login = (payload) => async (dispatch) => {
  dispatch({ type: "LOGIN", payload: payload });
};
