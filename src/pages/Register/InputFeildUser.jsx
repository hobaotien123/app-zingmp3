import React from "react";
const InputFeildUser = (props) => {
  const { field, form, label, type, placeholder } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div>
        {label && <label>{label}</label>}
        <input
            className="input-form-login-wrapper"
            placeholder={placeholder}
            type={type}
            {...field}
        />
        {showError && <p>{errors[name]}</p>}
    </div>
  );
};

export default InputFeildUser;
