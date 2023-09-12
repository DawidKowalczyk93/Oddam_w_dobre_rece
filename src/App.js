import React, {Component} from "react";
import {
    Route,
    Routes,
    BrowserRouter
} from 'react-router-dom';

import Home from "./components/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/CreateAccount/CreateAccount";

function App() {
  return (
    <div className="App">
        <div className='main'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<SignUp />} />
                </Routes>
            </BrowserRouter>


        </div>

    </div>
  );
}

export default App;
