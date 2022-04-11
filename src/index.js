import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from "./Context/AuthContext"
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <AuthContextProvider>
          <App />
       </AuthContextProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

