
const initialState = {
    list : [],
    loading : true,
    err : false,
}

const listNewSongReducer = (state = initialState, action) => {
    switch(action.type) {
        case "NEW_LIST" : {
            // let newList = [...state.list];
            // newList = [...action.payload];
            return {
                ...state,
                list : action.payload,
                loading : false
            }
        }
        case "ERR_LIST" : {
            return{
                ...state,
                list : [],
                loading : false,
                err : true,
            }
        }
        default : 
            return state;
    }
}
export default listNewSongReducer;