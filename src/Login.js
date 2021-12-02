import React from "react";
import InputForm from "./InputForm";
function Login() {
  const handleSubmit = () => {
    return "hi";
  };
  const handleChange = () => {};
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
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
