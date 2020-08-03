const initialState = {
  list: [],
  loading: false,
  err: false,
};

const listNewSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_LIST": {
      return {
        ...state,
        loading: true,
      };
    }
    case "NEW_LIST": {
      // let newList = [...state.list];
      // newList = [...action.payload];
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    }
    case "ERR_LIST": {
      return {
        ...state,
        err: true,
      };
    }
    default:
      return state;
  }
};
export default listNewSongReducer;
