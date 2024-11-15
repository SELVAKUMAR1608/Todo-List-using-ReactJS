import React from 'react'

function Button({text,clickHandler,className}) {
  return (
    <div>
        <button onClick={clickHandler} className={className}>
            {text}
        </button>
    </div>
  )
}

export default Button