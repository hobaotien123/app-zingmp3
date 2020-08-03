import axios from "axios";
import { NEW_LIST, ERR_LIST, LOADING_LIST } from "../constants/index.js";

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
    return fetch(url)
      .then((res) => res.json())
      .then((result) => {
        dispatch(addlistNewSong(result));
      })
      .catch((err) => dispatch(errListNewSong()));
  };
};
