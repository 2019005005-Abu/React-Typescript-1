import React from 'react'
import '../Style1/Style1.css'
const Card=({children}:{children:React.ReactNode})=>{
    return(<div className='card'>{children}</div>)
}
export default Card;

