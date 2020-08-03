import axios from 'axios';

   
const NEW_LIST = "NEW_LIST";
const ERR_LIST = "ERR_LIST";
const url = 'http://localhost:3000/listNewSong';

export const addlistNewSong = (newList) => {
    return{
        type : NEW_LIST,
        payload : newList
    }
}

export const errListNewSong = () => {
    return{
        type : ERR_LIST,
    }
}

export const fetchData = () => {
    return (dispatch) => {
                return axios.get(url)
                .then( res => {
                    console.log('ss',res.data);
                    dispatch(addlistNewSong(res.data))
            }
        )
        .catch(err => dispatch(errListNewSong()));
    }
    
}