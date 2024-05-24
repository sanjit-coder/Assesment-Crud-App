// SelectInput.js

import React, { useState } from "react";
import downarrow from "../../assets/images/downarrow.svg";

const SelectInput = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (val) => {
    setIsOpen(false);
    onChange(val);
  };
  return (
    <div className="custom-select-container">
      <div className="custom-select-label">{label}</div>
      <div className="custom-select-wrapper" onClick={toggleDropdown}>
        <div className="custom-select-header">
          <span>{value}</span>
          <img src={downarrow} alt="Arrow" />
        </div>
        {isOpen && (
          <div className="custom-select-options">
            {options &&
              options.map((option) => (
                <div
                  key={option.value}
                  className="custom-select-option"
                  onClick={() => handleSelect(option.text)}
                >
                  {option.text}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
