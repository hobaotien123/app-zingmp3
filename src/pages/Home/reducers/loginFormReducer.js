const localStoragekey = localStorage.getItem("jwt");
let register = true;
localStoragekey ? register = false : register = true;
let initialState = {
  token: localStoragekey || "",
  loading: false,
  loginErr : false,
  loadingLogOut: false,
  register: register,
};

const loginFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_LOGIN": {
      return {
        ...state,
        loadingLogOut: false,
        loading: true,
        register: false,
      };
    }
    case "GET_TOKEN": {
      return {
        ...state,
        token: action.payload,
        loadingLogOut: false,
        loading: false,
        register: false,
      };
    }
    case "LOGIN_ERR" : {
      return {
        ...state,
        loading: false,
        loginErr : true,
      }
    }
    case "LOADING_LOGOUT": {
      return {
        ...state,
        loading: false,
        loadingLogOut: true,
        register: false,
      };
    }
    case "LOG_OUT": {
      return {
        ...state,
        token: "",
        loading: false,
        loadingLogOut: false,
        register: true,
      };
    }
    default:
      return state;
  }
};
export default loginFormReducer;
