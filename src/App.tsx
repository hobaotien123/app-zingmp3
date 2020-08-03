import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Pages from './pages/Home/Templates';
import store from '../src/pages/Home/store/store.js';


const App:React.FC =  () => {
  
    return (
      <Provider store={store}>
        <div className="App Container">
          <Pages />
        </div>
      </Provider>
        
    );
}

export default App;
