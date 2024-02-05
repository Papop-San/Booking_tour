import React from 'react'
import { Link } from 'react-router-dom'

function loginpage() {
  return (
    <div className='flex flex-col'>
      <div className="mt-[10rem] mb-32">
        <h1 className='text-4xl text-center py-2'>Login</h1>
        <div className='flex justify-between px-4 '>
          
          <form className='max-w-md mx-auto '> 
            <input type='email' placeholder='your@email.com'/>
            <input type='password' placeholder='password'/>
            <button className='primary py-4' >Login</button>
            <div className='text-center py-2'> 
              <div className="text-center py-2 text-gray-500">
                Don't have an account yet?
              <Link to={'/regis'} className='underline text-black'>Register now</Link>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default loginpage