import React, {Component} from "react";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet, BrowserRouter
} from 'react-router-dom';

import Home from "./components/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
        <div className='main'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='login' element={<Login />} />
                </Routes>
            </BrowserRouter>


        </div>

    </div>
  );
}

export default App;
