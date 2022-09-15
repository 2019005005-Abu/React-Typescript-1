import User from '../User';
import React,{useState}from 'react'
 type User={
    id:number,
    name:string,
    Profession:string,
    University:string
 }
const UseStateInTS = () => {
    const[users,setUsers]=useState<null |User>({} as User);
    const HandleAddUser=()=>
    {
     setUsers({
        id:2019005005,
        name:"Abu Al Shahriar Rifat",
        Profession:"Software Enginnering",
        University:"University Of Sharda"
     })
     console.log(users)
    }
  return (
    <div>
      I am using UseState in Typescript
      <button onClick={HandleAddUser}>Add-User</button>
      <p>Name:{users?.name}</p>
      <p>Profession:{users?.Profession}</p>
      <p>University:{users?.University}</p>
    </div>
  )
}

export default UseStateInTS
