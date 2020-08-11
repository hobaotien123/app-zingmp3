export const loginForm = (token) => {
  return {
    type: 'GET_TOKEN',
    payload: token,
  };
};
export const loadingGetToken = () => {
  return {
    type : 'LOADING_LOGIN'
  }
}

export const loginErr = () => {
  return {
    type : 'LOGIN_ERR',
  }
}

export const loadingLogOutUser = () => {
  return {
    type : 'LOADING_LOGOUT'
  }
}

export const logOut = () => {
  return {
    type : 'LOG_OUT',
  }
}

export const logOutUser = () => {
  return (dispatch) => {
    dispatch(loadingLogOutUser());
    return setTimeout(() => {
      return dispatch(logOut());
    }, 200);
  }
}



export const getToken = (values,history) => {
  const { username, password} = values;
  return (dispatch) => {
    dispatch(loadingGetToken());
    return fetch('http://localhost:8081/users',{
                method : 'POST',
                headers : { "Accept" : "application/json",
                "Content-Type": "application/json"},
                body : JSON.stringify({username,password})
            })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if( json.sucess === false){
                    dispatch(loginErr());
                }else{
                    localStorage.setItem('jwt',json);
                    dispatch(loginForm(json))
                    history.push('/');
                }
            })
    
  }
}