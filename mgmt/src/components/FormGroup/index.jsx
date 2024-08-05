import React from 'react';

const FormGroup = ({ name, type, label }) => {
  return (
    <div className={`form-group ${name}`}>
        <label htmlFor={name}>{label}</label>
        <input type={type} id={name} name={name} />
    </div>
  );
}

export default FormGroup;
