import { NEW_LIST, ERR_LIST, LOADING_LIST } from "../constants/index.js";
import axios from 'axios';

const url = "http://localhost:3000/listNewSong";

export const addlistNewSong = (newList) => {
  return {
    type: NEW_LIST,
    payload: newList,
  };
};
export const loadingList = () => {
  return {
    type: LOADING_LIST,
  };
};
export const errListNewSong = () => {
  return {
    type: ERR_LIST,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(loadingList());
    return axios.get(url)
      // .then(res => res.json())
      .then(res => {
        dispatch(addlistNewSong(res.data));
      })
      .catch((err) => {
        console.log('errre', err)
        dispatch(errListNewSong())});
  };
};
