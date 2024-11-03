import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
        <div class = 'loginForm'>
            <h4>welcome loginpage</h4>
            <form>
                <div className = 'email'>
                    <label htmlFor='email' ><strong>Email:</strong></label>
                    <input type='email' name='email' placeholder='enter your name' />
                </div>
                <div class ='password'> 
                    <label htmlFor='password' ><strong>password:</strong></label>
                    <input type='password' name='password' placeholder='enter your password' />
                </div>
              <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login