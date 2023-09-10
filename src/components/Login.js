import React from 'react'

const Login=()=> {
    const [email,setEmail]= React.useState('')
    const [password,setPassword]= React.useState('')
    const handleLogin=()=>{
      console.warn(email,password)
    }
  return (
    <div className="login-box">
          <h1>Login</h1>

        <input className="input-box" type="text" placeholder='Enter Email'
        onChange={(e)=>setEmail(e.target.value)} value={email} />

        <input className="input-box" type="password" placeholder='Enter Password'
        onChange={(e)=>setPassword(e.target.value)} value={password}/>

        <button onClick={handleLogin} className="login-btn" type="button">Login</button>
         
    </div>
  )
}

export default Login