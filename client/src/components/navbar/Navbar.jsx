import {useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { userContext } from '../../context/context'

const Navbar = () => {
  const {Token,UserData}=useContext(userContext)
  return (
    <nav className="navbar">
        <h1 className="navbar-title">My Website</h1>
        {Token?
        <Link className='LinktoProfile' to='./Profile'>
          <div className='navbar-pro'>
            <i className="fa-solid fa-user"></i>
            <span className='navbar-profile'> {UserData.name}</span>
          </div>
        </Link>
        :<Link to='./Signin' className="navbar-button">Sign In</Link>}
    </nav>
  )
}

export default Navbar