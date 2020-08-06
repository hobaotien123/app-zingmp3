import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Pages from './pages/Home/Templates';
import store from '../src/pages/Home/store/store.js';
import Login from './pages/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App:React.FC =  () => {
  
    return (
      <Router>
        <Provider store={store}>
            <div className="App Container">
              <Route path="/login"  component={Login} />
              <Route path="/" exact component={Pages} />
            </div>
        </Provider>
      </Router>
        
    );
}

export default App;
