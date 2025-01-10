import React, { useContext } from 'react'
import './Body.css'
import { Link } from 'react-router-dom'
import { userContext } from '../../context/context'

const Body = () => {
  const {Token}=useContext(userContext)
  return (
    <div className='container-body'>
    <div className="card-container">
        <Link to={Token?`./DiaryEntry`:'./Signin'} className="card">
          <div className="card-content">
            <h1>Diary</h1>
          </div>
        </Link>
    </div>
    </div>
  )
}

export default Body
