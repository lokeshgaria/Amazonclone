import React from 'react';
import ReactDOM from 'react-dom';
import {StateProvider} from './StateProvider';
import App from './App';
import reducer, {initialState} from './reducer';

ReactDOM.render(
  <>
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
  </>,


  document.getElementById('root')
);


