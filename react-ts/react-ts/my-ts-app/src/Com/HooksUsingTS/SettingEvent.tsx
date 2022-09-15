import React,{useState} from 'react'
const SettingEvent = () => {
    const [userName,setUserName]=useState('');
    const  handleUsername=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setUserName(event.target.value)
    }
const  handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{
    console.log(userName)
}
  return (
    <div>
       <p>Create New User</p>
       <input type="text" 
       placeholder='Enter Your text'
       value={userName}
        onChange={handleUsername}
       />
       ,<button onClick={handleClick}>Show Event</button>
    </div>
  )
}

export default SettingEvent
