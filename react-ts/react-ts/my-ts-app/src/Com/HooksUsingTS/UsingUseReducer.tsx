import { count } from 'console'
import React,{useReducer} from 'react'
import { IncrementExpression } from 'typescript'

export const UsingUseReducer = () => {
  const initialState={
    count:0
  }
  type counterintialStateType={
     count:number
}
  const INCREMENT="INCREMENT";
  const RESET="RESET";
  const DECREMENT="DECREMENT";
  const INCREMENTbY_AMOUNT="INCREMENTbY_AMOUNT"

type INCREMENT_ACTION_TYPE={type:"INCREMENT"}
//{type:typeof INCREMENT}
type DECREMENT_ACTION_TYPE={type:"DECREMENT"}
//{type:typof DECREMENT}
type RESET_ACTION_TYPE={type:"RESET"}
  //{type:typeof RESET}
type  INCREMENTbY_AMOUNT_TYPE={type:"INCREMENTbY_AMOUNT",payload:number}

type COUNTERACTION_TYPE=
INCREMENT_ACTION_TYPE |
DECREMENT_ACTION_TYPE |
INCREMENTbY_AMOUNT_TYPE |
RESET_ACTION_TYPE;


  const reducer=(state:counterintialStateType ,action:COUNTERACTION_TYPE)=>{
   switch(action.type){
    case INCREMENT:
        return {count:state.count+1}
        break;
    case RESET:
        return {count:0}
        break;
    case INCREMENTbY_AMOUNT:
        return {count:state.count+action.payload}
        break;
    case DECREMENT:
        return {count:state.count-1}
        break;
    default:
        throw new Error("Have a Error,Please Check");
   }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div>
        <h1>Count:{state.count}</h1>
        <button 
        disabled={state.count==100}
        onClick={()=>
        {dispatch({type:INCREMENT})}}
        >Increment</button>
         <button 
        disabled={state.count==100}
        onClick={()=>
        {dispatch({type:INCREMENTbY_AMOUNT,payload:5})}}
        >Increment By Amount</button>
        <button 
        onClick={()=>
        {dispatch({type:RESET})}}>Reset</button>
        <button 
         disabled={state.count==0}
        onClick={()=>
        {dispatch({type:DECREMENT})}}>Decrement</button>
    </div>
  )
}
