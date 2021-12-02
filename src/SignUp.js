import React from "react";
import InputForm from "./InputForm";

function SignUp() {
  const handleChange = () => {};
  const name = "firstName";
  const type = "text";
  const label = "First Name";
  return (
    <div className="form-container">
      <h1>Hello</h1>
      <form>
        <InputForm
          name="firstName"
          label="First Name"
          handleChange={handleChange}
          type="text"
        />
        <InputForm
          name="lastName"
          label="Last Name"
          handleChange={handleChange}
          type="text"
        />
        <InputForm
          name="email"
          label="Email"
          handleChange={handleChange}
          type="email"
        />
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
        <InputForm
          name="confirmPassword"
          label="Confirm Password"
          handleChange={handleChange}
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
