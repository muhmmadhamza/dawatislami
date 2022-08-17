import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import SignUp from './Components/signup'
import Login from './Components/Login'
import NAVBAR from './Components/NavBar'
function App() {
  return (
    <Router>
      <div className="App">
          <NAVBAR/>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
         
      </div>
    </Router>
  )
}
export default App
