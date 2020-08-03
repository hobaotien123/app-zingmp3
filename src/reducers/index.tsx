import { combineReducers } from 'redux';
import listNewSongReducer from './listNewSongReducer.js';


const rootReducer = combineReducers({
    listSong : listNewSongReducer,
})

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;