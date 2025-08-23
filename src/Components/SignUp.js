import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {


  const [credentials,setcred]=useState({name:"",email:"",password:""})
  const navigate=useNavigate()
  
  const handleSubmit=async (e) =>{
    e.preventDefault()
     const {name,email,password}=await credentials
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: name,email:email, password: password }),

});

const json=await response.json()
console.log(json);
if(json.success){
  localStorage.setItem('token',JSON.authtoken);
  navigate("/")
}
else{
  alert(json.error)
}

  }
  
  const onChange=(e)=>{
    setcred({...credentials,[e.target.name] : e.target.value})
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="text" className="form-control" id="name" name='name' onChange={onChange} value={credentials.name} placeholder="Enter name" />
        </div>
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

export default SignUp
