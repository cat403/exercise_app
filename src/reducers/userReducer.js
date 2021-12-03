const initialState = {
  loggedIn: false,
  name: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("got here", {
        ...state,
        loggedIn: true,
        name: action.payload,
      });
      return { ...state, loggedIn: true, name: action.payload };
    case "LOGOUT":
      return { ...initialState };
    default:
      return state;
  }
};
export default userReducer;
