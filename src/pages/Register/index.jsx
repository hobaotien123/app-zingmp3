import React from "react";
import "./style.scss";
import { Formik, FastField, Form, validateYupSchema } from "formik";
import InputFeild from "./InputFeild";
import InputFeildUser from "./InputFeild";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerForm } from "../Home/actions/registerForm";
import { Spin } from "antd";

const Register = (props) => {
    const { loading, register } = useSelector(state => state.registerForm)
    const history = props.history;
    const dispatch = useDispatch();
    const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).max(20),
    password: Yup.string().required().min(4).max(20),
  });
  const testSubmit = (values) => {
      dispatch(registerForm(values,history));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => testSubmit(values)}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <div className="form-login-wrapper">
            <h1>Register</h1>
            <Form>
                <FastField
                name="name"
                component={InputFeildUser}
                type="text"
                label="Name: "
                placeholder="What's your name..."
                />
              <FastField
                name="username"
                component={InputFeildUser}
                type="text"
                label="Username"
                placeholder="Username..."
              />
              <FastField
                name="password"
                component={InputFeild}
                type="password"
                label="Password"
                placeholder="Password..."
              />
              {
                  loading === true && <Spin tip='Loading...' size='large' />
              }
              <button type="submit">REGISTER</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Register;
