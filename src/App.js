import React, {Component} from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import HomeOrganizations from "./components/HomeOrganizations";
import HomeAboutUs from "./components/Home/AboutUs/HomeAboutUs";
import HomeContact from "./components/HomeContact";
import HomeWhatIsAbout from "./components/HomeWhatIsAbout";
import LogInOut from "./components/LogInOut";

function App() {
  return (
    <div className="App">
        <div className='main'>

            <Home />
        </div>

    </div>
  );
}

export default App;
