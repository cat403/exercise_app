import React from "react";

function InputForm({ name, type, handleChange, label }) {
  console.log(name, type, handleChange, label);
  return (
    <div>
      <h3>{label}</h3>
      <input
        name={name}
        type={type}
        onChange={handleChange}
        label={label}
        required
      ></input>
    </div>
  );
}

export default InputForm;
