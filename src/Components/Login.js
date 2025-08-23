import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const [credentials, setcred] = useState({ email: "", password: "" })
  let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "email": credentials.email, "password": credentials.password }),

    });
    const json = await response.json()
    console.log(json);
    if(json.success)
      {localStorage.setItem('token',JSON.authtoken);
      history("/");

    }
    else{
      alert("Invalid credentials");
    }


  }
  const onChange = (e) => {
    setcred({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value={credentials.email} placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
