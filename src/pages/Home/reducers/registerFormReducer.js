let initialState = {
    loading : false,
    register : false,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_REGISTER" : {
        return{
            ...state,
            register : false,
            loading : true,
        }
    }
    case "REGISTER_USER": {
      return {
        ...state,
        loading : false,
        register : true,
      };
    }
    default:
      return state;
  }
};
export default registerReducer;
