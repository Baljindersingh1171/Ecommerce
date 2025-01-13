import React from 'react'

export default function Buttons({text, onClick,name,className}) {
  return (
    <div>
     <button  name={name}id="btn" onClick={onClick} className={className} >
           {text}
        </button>
      
    </div>
  )
}
