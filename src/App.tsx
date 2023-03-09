import React from 'react';
import { useState } from 'react';
import Menubar from './components/Menubar';
import MessageBoard from './components/MessageBoard';
import Sidebar from './components/Sidebar' 


function App() {
  const [groupSelect, setGroupSelect] = useState<boolean[]>([false,false,true])


  return (
    <>
      <Menubar/>
      <Sidebar groupSelect={groupSelect} setGroupSelect={setGroupSelect}/>

      {groupSelect.map((item, index) => {
        return item ? <MessageBoard index={index} key={index}/> : null
      })}
    </>
  );
}

export default App;
