import React,{useState} from 'react'

export const NewUser = () => {
    const [name, setName] = useState('');
    const [email,setEmail]=useState('');

    const handleNameChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
       setName(event.target.name);
       console.log(event.target.value);
    }
    const handleEmailChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
       setEmail(event.target.value);
       console.log(event.target.value);
    }
    const HandleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      const object={
        name,
        email
      }
      console.log(object);
    }
  return (
    <div>
        <form action='' onSubmit={HandleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input type="text" placeholder='Enter Name' id="name"
                value={name} onChange={handleNameChange}/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type="email" placeholder='Enter Mail' id="email"
                value={email} onChange={handleEmailChange}/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}
