import React, { useState } from 'react'

type Props = {
    groupName : string
    selected : boolean
    handleClick : (index : number) => void
}

const GroupTab : React.FC<Props> = ({groupName, selected, handleClick}) => {

  
  const handleChange = () => {
    handleClick(parseInt(groupName,10)-1)
    return handleClick(parseInt(groupName,10)-1)

  }

  const selectedStyle : object = {
    backgroundColor: selected ? '#67798a' : '#374654'
  }



  return (
    <div 
    className='group-tab'
    onClick={handleChange}
    style={selectedStyle}
    > 
        <h3>Group {groupName}</h3>
    </div>
  )
}

export default GroupTab