import { combineReducers } from 'redux';
import listNewSongReducer from './listNewSongReducer.js';
import loginFormReducer from './loginFormReducer.js';
import registerReducer from './registerFormReducer.js';

const rootReducer = combineReducers({
    listSong : listNewSongReducer,
    loginForm : loginFormReducer,
    registerForm : registerReducer,
})

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;