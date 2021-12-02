import React from "react";

function Login() {
  const handleSubmit = () => {
    return "hi";
  };
  const handleChange = () => {};
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <h2>User Name</h2>
        <input
          name="userName"
          label="User Name"
          onChange={handleChange}
          type="text"
          autoFocus
        ></input>
        <h2>Password</h2>
        <input
          name="password"
          label="Password"
          onChange={handleChange}
          type="password"
        ></input>
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
