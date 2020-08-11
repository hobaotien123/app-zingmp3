import React from 'react';
import './style.scss';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../actions/loginForm';
import { AppState } from '../../reducers';
import { Spin } from 'antd';

const LogOutHeaderTop = () => {
    const { loadingLogOut, register } = useSelector((state: AppState) => state.loginForm );
    const dispatch = useDispatch();
    const removeUser = () => {
        localStorage.clear();
        dispatch(logOutUser());
    }
    return(
            // loadingLogOut === true ? <Spin/> :
            // <div onClick={removeUser} className='register-headertop-wrapper'>
            //     Đăng xuất
            // </div>
            register === true ? 
            <Link to='/register'>
                <div className='register-headertop-wrapper'>Đăng ký</div>
            </Link> : loadingLogOut === true ? <Spin/> :
            <div onClick={removeUser} className='logout-headertop-wrapper'>
                Đăng xuất
            </div>
    );
}
export default LogOutHeaderTop;