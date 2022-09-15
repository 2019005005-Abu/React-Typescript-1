import React from 'react'
type Button_props={
    children:React.ReactNode
}
const Button = (props:Button_props) => {
  return (
    <div>
       <h1>Children Props</h1>
       <button>{props.children}</button>
    </div>
  )
}

export default Button
