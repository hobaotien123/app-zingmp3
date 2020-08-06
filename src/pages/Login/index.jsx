import React from 'react';
import './style.scss';
import { Formik,  FastField, Form, validateYupSchema } from 'formik';
import InputField from './InputField';
import * as Yup from 'yup';
const Login = (props) => {
    const { history } = props;
    const initialValues = {
        username : '',
        password : '',
    }
    const validationSchema = Yup.object().shape({
        username : Yup.string().required('Chưa nhập'),
        password : Yup.string().required('Chưa nhập')
    });
    const testSubmit = (values) => {
        const { username, password} = values;
        if( username === "admin" && password === "admin"){
            history.push('/');
        }else{
            return
        }
    }
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => testSubmit(values) }
            >
            { formikProps => {
                const { values, errors, touched } = formikProps;
                console.log(' { values, errors, touched } ',  { values, errors, touched } );
                return(
                    <div className='form-login-wrapper'>
                        <h1>Login</h1>
                        <Form >
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
                        <button>Sign in</button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
}


export default Login;