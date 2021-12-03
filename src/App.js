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
  const user = useSelector((state) => {
    return state.user.name;
  });
  console.log(useSelector((state) => state.user.name));
  // const user = useSelector((state) => {
  //   return state.user.name;
  // });
  console.log("loggedInStatus", loggedInStatus);
  // const tryDispatch = () => {
  // useDispatch(trying);
  // };
  // React.useEffect(() => {
  //   user = useSelector((state) => {
  //     return state.user.name;
  //   });
  // }, []);
  return (
    <div className="app">
      <h1>Hello</h1>
      {loggedInStatus ? <h3>LOGGED IN</h3> : null}
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
