import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { trying } from "./actions";
console.log(typeof trying());
function App() {
  const [loggedin, setLoggedIn] = React.useState(
    useSelector((state) => state.user.loggedIn)
  );
  const [name, setName] = React.useState();
  const dispatch = useDispatch();
  const loggedInStatus = useSelector((state) => {
    return state.user.loggedIn;
  });
  console.log(useSelector((state) => state.user.name));
  const user = useSelector((state) => {
    return state.user.name;
  });
  console.log("user", user);
  // const tryDispatch = () => {
  // useDispatch(trying);
  // };
  // React.useEffect(() => {
  //   dispatch(trying());
  // }, [dispatch]);
  return (
    <div className="app">
      <h1>Hello</h1>
      <h2>Logged In</h2>
      <p>{loggedInStatus}</p>
      <h2>Name</h2>
      <p>{user}</p>
      <button
        onClick={() => {
          dispatch(trying());
        }}
      >
        Try
      </button>
      {/*Hero Image*/}
      {/*Navigation bar*/}
      {/*Quick clock*/}
      {/*Sales Pitch*/}
    </div>
  );
}

export default App;
