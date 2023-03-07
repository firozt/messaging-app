import React from 'react'

type Props = {
  content : string
}

const Message : React.FC<Props> = ({content}) => {
  return (
    <div className="message">
      <h3>User</h3>
      <p>{content}</p>
    </div>

  )
}

export default Message