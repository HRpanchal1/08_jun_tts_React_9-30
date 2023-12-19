import React, { Component } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Classcompomenu from './Classcompomenu';
import Classcompointro from "./Classcompointro"
import Classone from './01Classone';
class Classcomporoutes extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Classcompomenu />} >
            <Route path='Classcompointro' element={<Classcompointro/>} />
            <Route path='Classone' element={<Classone/>} />
          </Route>
        </Routes>
      </>
    )
  }
}
export default Classcomporoutes