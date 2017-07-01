import React from 'react';

// import './form.css';

const renderField = ({ input, label, type, meta: { touched, error, invalid, warning } }) => (
  <div className="inputDiv">
    <label >{label}</label>
      <input {...input}  placeholder={label} type={type}/>
       <div className="help-block">
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

export default renderField;