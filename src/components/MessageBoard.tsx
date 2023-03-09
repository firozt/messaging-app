import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import TextInput from './TextInput'
type Props = {
  index : number
}


const Messages : React.FC<Props> = ({index}) => {

  const [messageArray, setMessageArr] = useState<Array<string>>([])
  const bottomRef = useRef<HTMLDivElement[]>();


  // useEffect(() => {
  //   if (bottomRef.current) {
  //     bottomRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [messageArray]);



  
  useEffect(() => {
    const savedState = localStorage.getItem(`messages_${index}`);
    if (savedState) {
      setMessageArr(savedState.split('|'));
    }
    console.log('load')
    
  }, []);


  useEffect(() => {
    bottomRef.
  }, [messageArray]);

  useEffect(() => {
    localStorage.setItem(`messages_${index}`, messageArray.join('|'));
    console.log('save')
  }, [messageArray]);



  const addMessage = (content : string) => {
    let newArray = [...messageArray, content]
    
    setMessageArr(newArray)
  }

  return (
  <>
    <div ref={bottomRef} className="messages" >
      {
        messageArray.map((item,index) => (
          <Message content={item} key={index}/>
        ))
      }
      <TextInput addMessage={addMessage}/>
    </div>
  </>
  )
}

export default Messages

