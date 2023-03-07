import React, { useState } from 'react'

type Props = {
    addMessage : (content : string) => void;
}

const TextInput : React.FC<Props>= ({addMessage}) => {
  const [inputValue, setInputValue] = useState<string>('');
  
  const onClick = (input : string) => {
    addMessage(input)
    setInputValue('')
  }

  const handle_change = (event : any) => {
    setInputValue(event.target.value)
  }
  return (
    <div className="textInput">
        <input type="text" value={inputValue} onChange={handle_change} />
        <button onClick={() => onClick(inputValue)}>Send</button>
    </div>
  )
}

export default TextInput