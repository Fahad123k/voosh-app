import React, { useState } from 'react'

const Form = () => {
    const [Registration, setRegistration] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    })

    const [record, setrecord] = useState([]);


    const handdleInput=(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        console.log(name,value);

        setRegistration({...Registration,[name]:value})

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const name= e.target.name;
        const newRecord={...Registration,id:new Date().getTime().toString()}
        console.log(record)
        setrecord([...record,newRecord])

        setRegistration({username:"",
        email:"",
        phone:"",
        password:"",})
      
    }

  return (
    <>
    <form action='' onSubmit={handleSubmit} >

    <div className="userName">
        <label htmlFor="username">Full name</label>
        <input type="text" name='username' id='username'placeholder='username'

        autoComplete='off' 
        value={Registration.username}
        onChange={handdleInput}
        />
    </div>
    <div className="email">
        <label htmlFor="email">email</label>
        <input type="text" name='email' id='username'placeholder='email' 
        
        autoComplete='off' 
        value={Registration.email}
        onChange={handdleInput}
        />

    </div>
    <div className="phone">
        <label htmlFor="phone">Full name</label>
        <input type="text" name='phone' id='phone'placeholder='phone' 
        autoComplete='off' 
        value={Registration.phone}
        onChange={handdleInput}
        
        />
    </div>
    <div className="password">
        <label htmlFor="password">password</label>
        <input type="text" name='password' id='password'placeholder='password' 
        autoComplete='off' 
        value={Registration.password}
        onChange={handdleInput}
        

        />

    </div>

    <button type="submit">Register</button>
    </form>
    </>
  )
}

export default Form