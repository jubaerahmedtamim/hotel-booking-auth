import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>

      <Header />
      <Outlet></Outlet>
      {/* Include other components where needed */}
    </>
  )
}

export default App
