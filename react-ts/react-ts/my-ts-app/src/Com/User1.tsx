import React from 'react'
import User from './User';
type customeType={
    uesrs: {
        name: string;
        Profession: string;
        University: string;
        System_Id: number;
    }[]
}
const User1 = ({uesrs}:customeType) => {
     console.log(uesrs);
  return (
    <div>
     {uesrs.map((user,index)=>{
        const {name,Profession,University,System_Id}=user;
        return(
          <div key={index}>
            <p>Name{name}</p>
            <p>Profession:{Profession}</p>
            <p>University:{University}</p>
            <p>System-Id:{System_Id}</p>
          </div>
        )
     })}
    </div>
  )
}

export default User1
