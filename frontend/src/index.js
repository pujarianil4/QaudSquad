import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import socketIOClient from 'socket.io-client'
import SocketContext from './Context/SocketContext';
import {Provider} from "react-redux"
import { store } from './Redux/Store';
const ENDPOINT ="http://localhost:2244";

const socket = socketIOClient(ENDPOINT)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <BrowserRouter>
  
    <SocketContext.Provider value={socket}>
      <App />
      </SocketContext.Provider>
    
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
