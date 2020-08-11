import React from "react";
import { Input, Button, Checkbox, Form, Popover, Progress } from "antd";
import { Formik, FastField, ErrorMessage } from "formik";
const InputField = (props) => {
  const { field, form, label, type, placeholder } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  let testregex = false;
  const regexForm = (pattern) => {
     testregex =  pattern.test(value)
  }

  const content = (
    <div>
        <div className="progress-ant">
            <p className="text-ant">{regexForm(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) }Password minimum 8 characters</p>
            {
                testregex === true ? <Progress width={30} type="circle" percent={100} /> :
                <Progress width={30} type="circle" percent={0} status="exception" />
            }
            </div>
        <div className="progress-ant">
            <p className="text-ant">{regexForm(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/) }Password minimum 8 characters and 1 number 1 special character</p>
            {
            testregex === true ? <Progress width={30} type="circle" percent={100} /> :
            <Progress width={30} type="circle" percent={0} status="exception" />
            }
        </div>
    </div>
  );
  return (
    <div>
      {label && <label>{label}</label>}
      <Popover width={500} content={content} title="Title" trigger="click">
        <input
          className="input-form-login-wrapper"
          placeholder={placeholder}
          type={type}
          {...field}
        />
      </Popover>
      {showError && <p>{errors[name]}</p>}
    </div>
  );
};

export default InputField;
