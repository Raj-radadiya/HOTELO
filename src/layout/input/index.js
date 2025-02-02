import React from 'react'

export default function Input(props) {
  return (
    <div>
      <input id={`input ${props.id}`}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  )
}
