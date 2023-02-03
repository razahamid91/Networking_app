import React from "react";
import "./App.css";
import { BrowserRouter, routes, route } from "react-router-dom";
import Login from "./components/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  // console.log(isAuthenticated)
  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <div className="app">
          <Header />
          <div className="app_body">
            <routes>
              <route path="/" element={<Home />} />
              <route path="/about-us" element={<AboutUs />} />
              <route path="/profile" element={<h1>Profile Page</h1>} />
            </routes>
          </div>
          {/* 
      
        <div className='app_body'>
          <AboutUs />
        </div>

        <Login /> */}
        </div>
      ) : (
        // <Login />
        <Home/>
      )}
    </BrowserRouter>
  );
}

export default App;
