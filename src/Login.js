import React from "react";
import InputForm from "./InputForm";

function Login() {
  const initialState = { userName: "", password: "" };
  const [formData, setFormData] = React.useState(initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hi");
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <InputForm
          name="userName"
          label="User Name"
          handleChange={handleChange}
          type="text"
        />
        <InputForm
          name="password"
          label="Password"
          handleChange={handleChange}
          type="password"
        />
        <button className="submitBtn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
