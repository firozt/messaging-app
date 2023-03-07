import React from 'react';
import { useState } from 'react';
import Menubar from './components/Menubar';
import MessageBoard from './components/MessageBoard';
import Sidebar from './components/Sidebar' 

function App() {

  return (
    <>
      <Menubar/>
      <Sidebar/>
      <MessageBoard/>
    </>
  );
}

export default App;
