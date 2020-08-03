import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import rootReducer from "../reducers";
import thunkMiddleware from 'redux-thunk'


const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

export default store;