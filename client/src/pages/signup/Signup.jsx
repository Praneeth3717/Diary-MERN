import './Signup.css'
import { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const navigate=useNavigate()
  const url="http://localhost:9574/api/user/register"
  const [data,setdata]=useState({
    name:"",
    email:"",
    password:""
  })
  const onChangeHandler = (event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setdata(data=>({...data,[name]:value}))
  }
  const onSingUp = async(event)=>{
    event.preventDefault()
    const response=await axios.post(url,data)
    if(response.data.success){
      alert('User redistered successfully')
      navigate('/Signin')
    }
    else{
      alert('error')
    }
  }
  
  return (
    <div className="signup-container">
      <form onSubmit={onSingUp} className="signup-form">
        <div className='back'>
          <Link to='/'><i className="fa-solid fa-xmark"></i></Link>
        </div>
        <h2 className="signup-title">Sign Up</h2>
        
        <label htmlFor="name" className="signup-label">Full Name</label>
        <input type="text" name='name' id="name" value={data.name} onChange={onChangeHandler} className="signup-input" placeholder="Enter your full name" required />

        <label htmlFor="email" className="signup-label">Email</label>
        <input type="email" name='email' id="email"  value={data.email} onChange={onChangeHandler} className="signup-input" placeholder="Enter your email" required />

        <label htmlFor="password" className="signup-label">Password</label>
        <input type="password" name='password' id="password" value={data.value} onChange={onChangeHandler} className="signup-input" placeholder="Create a password" required />

        <button type="submit" className="signup-button">Sign Up</button>
        <div className="signup-login-prompt">
          <p className="signup-login-text">Do you have an account?</p>
          <Link to='/Signin' type="button" className="signup-login-button">Log In</Link>
        </div>
      </form>
    </div>
  )
}

export default Signup