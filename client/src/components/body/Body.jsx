import React from 'react'
import './Body.css'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <div className='container-body'>
    <div className="card-container">
        <Link to='./DiaryEntry' className="card">
            <div className="card-content">
                <h1>Diary</h1>
            </div>
        </Link>
    </div>
    </div>
  )
}

export default Body
