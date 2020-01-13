import React from 'react'

class Login extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <label>Email</label>
                    <input type='Email' required/> 
                    <label>Password</label>
                    <input type='Password' required/> 
                    <button>Sing in</button>
                </form>
                <a href='#'>
                  sing up
                </a>
            </div>
        )
    }
    
}
export default Login