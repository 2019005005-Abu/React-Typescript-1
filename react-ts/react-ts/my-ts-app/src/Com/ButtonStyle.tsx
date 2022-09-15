import React from 'react'
type BtnStyleProps={
 btnStyle:React.CSSProperties
}
const ButtonStyle = (props:BtnStyleProps) => {
  return (
    <div style={props.btnStyle}>Button is Styling from Here</div>
  )
}

export default ButtonStyle
