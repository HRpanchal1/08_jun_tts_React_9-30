// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Test from "./Test";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Navbar from "./com-compo/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<><Navbar/> <Home/></>} /> */}
          {/* <Route path="/home" element={<h1>Home</h1>} /> */}
          {/* <Route path="/about" element={<About/>} /> */}
          {/* <Route path="/product" element={<Product/>} /> */}
          <Route path="/" element={<Navbar/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="product" element={<Product/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
