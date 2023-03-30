import React from 'react'
import './CustomTextField.css'

const CustomTextField = ({
    id,
    label,
    value,
    onChange,
    error,
    helperText,
    placeholder,
  }) => {
    console.log(placeholder)
    return (
      <div className="custom-textfield-container">
        <label htmlFor={id} className="custom-textfield-label">
          {label}
        </label>
        <input
          id={id}
          className={`custom-textfield-input ${error ? 'custom-textfield-input-error' : ''}`}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && <span className="custom-textfield-error">{helperText}</span>}
      </div>
    );
  };
  
export default CustomTextField
  
