import React, {Component} from "react";
import {
    Route,
    Routes,
    BrowserRouter
} from 'react-router-dom';

import Home from "./components/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/CreateAccount/CreateAccount";
import UserAuthContextProvider from "./context/UserAuthContext";

function App() {
  return (
    <div className="App">
        <div className='main'>
            <BrowserRouter>
                <UserAuthContextProvider>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='login' element={<Login />} />
                        <Route path='signup' element={<SignUp />} />
                    </Routes>
                </UserAuthContextProvider>

            </BrowserRouter>


        </div>

    </div>
  );
}

export default App;
