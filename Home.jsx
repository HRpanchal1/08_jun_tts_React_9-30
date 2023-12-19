import React from 'react';
import Navbar from './com-compo/Navbar';
import img from "./img/cheerful-man-pointing-finger-left-advertise-product.jpg"

function Home () {
    return  (
    <>
    {/* <Navbar/> */}
     <h1>HOME PAGE</h1>
     <img src={img} alt="" />
    </>
    )
}
export default Home