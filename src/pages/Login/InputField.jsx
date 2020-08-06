import React from 'react';
import { Input, Button, Checkbox, Form } from 'antd';
import { Formik,  FastField, ErrorMessage } from 'formik';
const InputField = (props) => {
    const {
        field, form,
        label,type,placeholder
    } = props;
    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name]  && touched[name];
    return(
        <div>
            { label && <label>{label}</label> }
            <input className='input-form-login-wrapper'
                placeholder={placeholder}
                {...field}
                
            >
            </input>
            { showError && <p>{errors[name]}</p>}
        </div>
    );
}

export default InputField;