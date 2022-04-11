import './App.css';
import React from "react"
import {Login} from "./Components/Login"
import {Routes,Route} from "react-router-dom"




function App() {
  return (
    <div className='App'>
         <Login />
         <Routes>
           <Route path='/Login' element ={<Login/>}/>
         </Routes>
    </div>
  );
}

export default App;
