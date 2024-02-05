import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import axios  from 'axios';

function register () {
    const [name,setName] = useState('');
    const [email , setEmail] = useState('');
    const [password ,setPass] = useState('');

    function RegisterUser(){

    }


  return (
    <div className='flex flex-col'>
      <div className="mt-[10rem] mb-32">
        <h1 className='text-4xl text-center py-4'>Register</h1>
        <div className='flex justify-between px-4 '>
          
          <form className='max-w-md mx-auto' onSubmit={RegisterUser}> 
            <input 
            type='text'
             placeholder='Username' 
            value={name} 
            onChange={ev=> setName(ev.target.value)}/>
            <input 
            type='email' 
            placeholder='your@email.com' 
            value={email} 
            onChange={ev => setEmail(ev.target.value)}/>
            <input 
            type='password'
             placeholder='password'
             value={password} 
             onChange={ev => setPass(ev.target.value)}/>
            
            <button className='primary py-4'>Register</button>
            <div className='text-center py-2'> 
              <div className="text-center py-2 text-gray-500">
                Already a member?
              <Link to={'/login'} className='underline text-black'>Login</Link>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default register