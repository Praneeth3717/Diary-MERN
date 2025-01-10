import React,{useState} from 'react'
import './ChangePassword.css'
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ChangePassword = () => {
  const {userId}=useParams();
        const [passwordData, setPasswordData] = useState({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setPasswordData({ ...passwordData, [name]: value });
        };
      
        const handleSubmit = async(e) => {
          e.preventDefault();
          if (!userId) {
            alert('User is not logged in.');
            return;
          }
          try {
            const response=await axios.put(`http://localhost:9574/api/user/updatePass/${userId}`,{...passwordData})
            if (response.data.success) {
              alert(response.data.message);
            } else {
              alert('Error: ' + response.data.message);
            }
          } catch (error) {
            if (error.response) {
              console.error('Error Response Data:', error.response.data);
              alert('Error: ' + error.response.data.message);
            } else {
              console.error('Error during request:', error.message);
              alert('Something went wrong. Please try again.');
            }
          }
        };
  return (
    <div className="profile-container">
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="profile-button">
          Change Password
        </button>
      </form>
    </div>
  )
}

export default ChangePassword
