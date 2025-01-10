import React,{useContext, useState} from 'react'
import './EditProfile.css'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';
import { userContext } from '../../context/context';

const EditProfile = () => {
  const {userId}=useParams()
  const urlUpdate=`http://localhost:9574/api/user/update/${userId}`
  const navigate=useNavigate()
  const {UserData,setUserData}=useContext(userContext)
  const [formData, setFormData] = useState({
    username: UserData?.name,
    email: UserData?.email,
    phone:UserData?.phone,
    bio: UserData?.bio||"Welcome to my profile!",
  });
    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.put(urlUpdate,formData)
      if(response.data.success){
        setUserData(response.data.updateData)
        alert("Successfully updated")
        navigate(`../${userId}/Profile`)
      }
      else{
        console.log(response.data)
      }
  };
  return (
    <div className='Edit-profile'>
      <div className="profile-container-2">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="profile-button">
          Save Changes
        </button>
      </form>
    </div>
    </div>
  )
}

export default EditProfile
