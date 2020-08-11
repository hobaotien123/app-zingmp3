

export const registerUser = () => {
    return{
        type : "REGISTER_USER",
    }
}

export const loadingRegister = () => {
    return{
        type : "LOADING_REGISTER",
    }
}

export const registerForm = (values,history) => {
    const { username, password , name } = values;
    return (dispatch) => {
        dispatch(loadingRegister());
        setTimeout(() => {
            return fetch("http://localhost:8081/register", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, password, name }),
            })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if( json.sucess === true){
                    dispatch(registerUser())
                    history.push('/login');
                }
            })
            .catch(err => console.log(err));
        }, 500);
    }
} 