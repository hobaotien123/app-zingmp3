import React from "react";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../Home/actions/loginForm";
import { Redirect, Route } from "react-router-dom";
import { Spin } from "antd";

const Login = (props) => {
  const history = props.history;
  const dispatch = useDispatch();
  const { token, loading , loginErr } = useSelector((state) => state.loginForm);
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).max(20),
    password: Yup.string().required().min(4).max(20),
  });
  const testSubmit = (values) => {
    dispatch(getToken(values, history));
  };

  return (
    <Route exact path="/login">
      {token ? (
        <Redirect to="/" />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => testSubmit(values)}
        >
          {(formikProps) => {
            const { values, errors, touched } = formikProps;
            console.log({ values, errors, touched });
            return (
              <div className="form-login-wrapper">
                <h1>Login</h1>
                <Form>
                  <FastField
                    name="username"
                    component={InputField}
                    type="text"
                    label="Username"
                    placeholder="Username..."
                  />
                  <FastField
                    name="password"
                    component={InputField}
                    type="password"
                    label="Password"
                    placeholder="Password..."
                  />
                  {
                    loginErr === true && <p>Tài khoản và mật không tồn tại</p>
                  }

                  { loading === true ? <Spin size="large" />  : 
                  <button type="submit">Sign in</button> }
                </Form>
              </div>
            );
          }}
        </Formik>
      )}
    </Route>
  );
};

export default Login;
