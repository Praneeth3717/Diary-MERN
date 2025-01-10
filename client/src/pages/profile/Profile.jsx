import React, { useContext } from 'react'
import './Profile.css'
import { Link,useNavigate} from 'react-router-dom';
import { userContext } from '../../context/context';


const Profile = () => {
  const {setToken,setUserData,UserData}=useContext(userContext)
  const navigate=useNavigate()
  const handleLogout = () => {
    setToken("")
    setUserData("")
    localStorage.removeItem("token")
    localStorage.removeItem("Userdata")
    navigate('/')
  };
  return (
    <div className='profile'>
      <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Avatar"
          className="profile-avatar"
        />
        <h1 className="profile-name">{UserData.name}</h1>
        <p className="profile-bio">{UserData.bio}</p>
        <button className="profile-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="profile-details">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <p><strong>Username : </strong>{UserData.name}</p>
          <p><strong>Email : </strong>{UserData.email}</p>
          <p><strong>Phone : </strong>{UserData.phone}</p>
        </div>
        <div className="profile-section">
          <h2>Account Settings</h2>
          <Link to='./EditProfile' className="profile-button">Edit Profile</Link>
          <Link  to='./ChangePassword' className="profile-button">Change Password</Link>
        </div>
        <div className="profile-section">
          <h2>Activity</h2>
          <p>Last Login: 2025-01-01</p>
          <p>Recent Activity: Viewed Dashboard</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
