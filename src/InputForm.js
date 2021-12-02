import React from "react";
import "./InputForm.css";

function InputForm({ name, type, handleChange, label, alert }) {
  return (
    <div>
      <h3>{label}</h3>
      <input
        className={alert ? (alert === "true" ? `red` : `green`) : null}
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
