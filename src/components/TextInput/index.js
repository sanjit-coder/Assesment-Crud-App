// TextInput.js

import React from "react";

const TextInput = ({ label, value, onChange }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type="text"
        className="custom-input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
