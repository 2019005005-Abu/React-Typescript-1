import React from 'react';
import './App.css';
import Button from './Com/Button';
import ButtonStyle from './Com/ButtonStyle';
import DataFetch from './Com/DataFetch';
import { NewUser } from './Com/HooksUsingTS/NewUser';
import SettingEvent from './Com/HooksUsingTS/SettingEvent';
import UseStateInTS from './Com/HooksUsingTS/UseStateInTS';
import { UsingUseReducer } from './Com/HooksUsingTS/UsingUseReducer';
import Post from './Com/Post';
import  User from "./Com/User"
import User1 from './Com/User1';

const btnStyle={
 color:"red",
 background:"black",
 borderRadious:"5%",
 width:"200px",
 margin:"0 auto",
 padding:"10px 20px"
}
function App() {
  const users=
  [
    {
      name:"Abu Al Shahriar Rifat",
      Profession:"Software Enginner",
      University:"University Of Sharda",
      System_Id:2019005005,
    },
    {
      name:"Abu Al Shahriar Musrad",
      Profession:"Software Enginner",
      University:"University Of Sharda",
      System_Id:2019005006,
    },
    {
      name:"Karim",
      Profession:"Software Enginner",
      University:"University Of Sharda",
      System_Id:2019005006,
    }
  ]
  return (
    <div className="App">
      <h1>Welcome to the React-Typescript</h1>
      <User name="Abu Al Shahriar Rifat" 
      Profession="Software Enginner"
      age={24}
      isRegistered={true}
      fovorite_language={["Javascript","Typescript","Python"]}
      />
      <User1 uesrs={users}/>
      <DataFetch status="success"/>
      <Button>Click Me</Button>
      <Post/>
      <ButtonStyle btnStyle={btnStyle} />
      <UseStateInTS/>
      <SettingEvent/>
      <NewUser/>
      <UsingUseReducer/>
    </div>

  );
}

export default App;
