import React, { useState } from 'react'
import GroupTab from './GroupTab'
type Props = {
  groupSelect : boolean[]
  setGroupSelect : (prev : any) => any
}
const NUM_OF_GROUPS = 4

const Sidebar : React.FC<Props> = ({groupSelect, setGroupSelect}) => {


  const handleClick : (index : number) => void = (index) => {
    let newArray = [false,false,false,false]
    
    newArray[index] = true
    console.log(newArray)
    setGroupSelect(newArray)

  }

  return (
    <div className="sidebar">
      <GroupTab groupName={`1`} selected={groupSelect[0]} handleClick={handleClick} /> 
      <GroupTab groupName={`2`} selected={groupSelect[1]} handleClick={handleClick}/> 
      <GroupTab groupName={`3`} selected={groupSelect[2]} handleClick={handleClick}/> 
      <GroupTab groupName={`4`} selected={groupSelect[3]} handleClick={handleClick}/> 
    </div>
  )
  }

export default Sidebar