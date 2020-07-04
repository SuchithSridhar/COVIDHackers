import React from "react";
import '../css/loginForm.css'

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}></label>
       <div className='textbox'>
      <input
        {...rest}
        name={name}
        id={name}
        placeHolder={name}
        className="form-control"
      />
    </div>
    </div>
  );
};

export default Input;
