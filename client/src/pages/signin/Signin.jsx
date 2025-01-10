import React ,{ useContext, useState} from 'react'
import './Signin.css'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../../context/context'

const Signin = () => {
  const {setToken,setUserData}=useContext(userContext)
  const navigate=useNavigate()
  const [data,setdata]=useState({
    email:"",
    password:""
  })
  const onChangeHandler=(event)=>{
    const name=event.target.name
    const value=event.target.value
    setdata(data=>({...data,[name]:value}))
  }
  const urltoverify="http://localhost:9574/api/user/verifyUser"
  const urltogetData="http://localhost:9574/api/user/getUser"
  const onLogin=async (event)=>{
    event.preventDefault()
    try {
      const response=await axios.post(urltoverify,data)
      if(response.data.success){
        alert("user logged in")
        const token = response.data.token;
        const dataresponse=await axios.get(urltogetData)
        const userData = dataresponse.data.foundemail;
        setToken(token)
        setUserData(userData)
        localStorage.setItem("token",token)
        localStorage.setItem("Userdata",JSON.stringify(userData))
        navigate(`/${userData._id}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }    
  }
  return (
    <div className="signin-container">
      <form onSubmit={onLogin} className="signin-form">
        <div className='back'>
          <Link to='/'><i className="fa-solid fa-xmark alpha"></i></Link>
        </div>
        <h2 className="signin-title">Sign In</h2>
        <label htmlFor="email" className="signin-label">Email</label>
        <input name='email' value={data.email} onChange={onChangeHandler} type="email" id="email" className="signin-input" placeholder="Enter your email" required />
        <label htmlFor="password" value={data.password}  className="signin-label">Password</label>
        <input name='password' type="password" id="password" onChange={onChangeHandler} className="signin-input" placeholder="Enter your password" required />
        <button type="submit" className="signin-button">Sign In</button>
        <div className="signin-login-prompt">
          <p className="signin-login-text">Don't have an account?</p>
          <Link to='/Signup' type="button" className="signin-login-button">Sign-Up</Link>
        </div>
      </form>
    </div>
  )
}

export default Signin
