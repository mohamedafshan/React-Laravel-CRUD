// import logo from './logo.svg';
// import './App.css';
import React from "react";
import MyRouter from "./router";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact-us">Cotnact Us</Link> */}

      <Navbar/>

      <MyRouter/>
    </div>
  );
}

export default App;
