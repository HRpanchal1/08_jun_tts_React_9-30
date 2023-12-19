import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './com-compo/Navbar';
import Home from "./Home"
// import { lazy } from 'react';
// import { lazy } from 'react-router-dom';
// import About from "./About"
import Product from "./Product"
import { Suspense } from 'react';
import Example from "./Example"
// import Classcompointro from './Classcompo/';

// import Classcomporoutes from "./Classcompo/Classcomporoutes"
const About = React.lazy(() => import('./About'))
const Classcomporoutes = React.lazy(() =>import("./Classcompo/Classcomporoutes"))
// const Classcomporoutes = React.lazy(()=> import('./Classcompo/Classcomporoutes'))
const Mainrouter = createBrowserRouter([
    {
       path : "/",
       element : <><Navbar/></> 
    },
    {
        path : "/home",
        element : <> <Navbar/><Home/></>
    },
    {
        path : "/about",
        element : <> <Navbar/>
        <Suspense fallback={<h1>Loading</h1>}><About/></Suspense>
        
        </>
    },
    {
        path : "/product",
        element : <> <Navbar/><Product/></>
    },
    {
        path : "/example",
        element : <> <Navbar/><Example/></>,
        children : [
            {
                path : "Classcompo/*",
                element : <><Suspense fallback={<h1>Loading...</h1>}><Classcomporoutes/></Suspense></>

            }
            // {
            //     path : "Classcompo",
            //     element : <><Classcompointro/></>

            // }
        ]
    },

]);

export default Mainrouter