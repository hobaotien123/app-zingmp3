import { combineReducers } from 'redux';
import listNewSongReducer from './listNewSongReducer.js';
import playMusic from './playMusic.js';


const rootReducer = combineReducers({
    listSong : listNewSongReducer,
    playMusic : playMusic,
})

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;