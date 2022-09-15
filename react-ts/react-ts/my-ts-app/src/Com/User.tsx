import React from "react";
type UserProps={
    name:string,
    Profession:string,
    age:number,
    isRegistered:boolean,
    fovorite_language:string[], 
}


//String,number,boolen,void,null
//user defined types-> Object,array,enum,union,any,custom Type
const User=(props:UserProps)=>{
    return(
        <div>
            This is Coming from Users
            <h3>My Name is {props.name}</h3>
            <p>My profession is ={props.Profession}</p>
            <p>I am {props.age} yaers old</p>
            <p>{props.isRegistered ? 
            "He is Registered":
            "He is not Registered"}
            </p>
            <p>My Favorite Languages are {props.fovorite_language}</p>
            <p>I am Expert at {
             props.fovorite_language.map((Lang,index)=>{
            return(<li key={index}>{Lang}</li> )})}</p>
           
           
        </div>
    )
}
export default User;