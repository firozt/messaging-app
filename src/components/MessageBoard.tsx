import React, { useState } from 'react'
import Message from './Message'
import TextInput from './TextInput'
type Props = {

}

const Messages = (props : Props) => {
  const [messageArray, setMessageArr] = useState<Array<string>>([])

  const addMessage = (content : string) => {
    let newArray = [...messageArray, content]
    
    setMessageArr(newArray)
  }

  return (
    <div className="messages">
      {
        messageArray.map((item,index) => (
          <Message content={item} key={index}/>
        ))
      }
      <TextInput addMessage={addMessage}/>
    </div>
  )
}

export default Messages