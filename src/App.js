import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/sideBar/Sidebar';
import Main from './pages/Main'

function App() {
  const [showSideNav, setShowSideNav] = useState(true);


  return (
    <div className="app">
      <Header showSideNav={showSideNav} setShowSideNav={setShowSideNav}/>
      <div className='app__page flex'>
        <Sidebar show={showSideNav} />
        <Main />
      </div>
    </div>
  );
}

export default App;
