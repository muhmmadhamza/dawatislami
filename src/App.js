import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SignUp from './Components/signup'
import Login from './Components/Login'
import NAVBAR from './Components/NavBar'
import InputDropdown from './Components/InputDropDown';
import DonnerDetials from './Components/Donerdetails/Index';
function App() {

  return (
    
      <div className="App">

        {/* {
          localStorage.getItem("navbar")==="login"&&<NAVBAR/>
        }
        {
          (!(localStorage.getItem("navbar")==="login"))&&<Login/>

        } */}

      <InputDropdown  />
      {/* <DonnerDetials/> */}

      </div>
  
  )
}
export default App
