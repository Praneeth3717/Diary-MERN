const bcrypt=require('bcrypt')
const userModel =require ('../model/userModel')

const changeProfileData=async(req,res)=>{
  const userId=req.params.userId
  const {username,email,phone,bio}=req.body
  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    const emailExists = await userModel.findOne({ email })
    if (emailExists && emailExists._id.toString() !== userId) {
      return res.status(400).json({ success: false, message: 'Email is already in use by another user' });
    }
    const updateData = await userModel.findByIdAndUpdate(
      userId,
      { username,email, phone, bio },
      { new: true } 
  );
    return res.status(200).json({ success: true, updateData });
  } catch (error) {
    console.error('Error in updateUserProfile:', error);
    return res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
}

const changePassword = async(req, res) => {
  const userId=req.params.userId
  const {currentPassword, newPassword, confirmPassword } = req.body;  
  if (!userId) {
    return res.status(400).json({ success: false, message: 'UserId is required' });
  }  
  try {
    const userExist = await userModel.findById(userId);
    if (!userExist) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(currentPassword, userExist.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Incorrect current password' });
    }
    if (currentPassword === newPassword) {
      return res.status(400).json({
        success: false,
        message: 'New password should not match the current password',
      });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'New password and confirm password do not match',
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    userExist.password = hashedPassword;
    await userExist.save();
    return res.status(200).json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
      console.error('Error in changePassword:', error);
      return res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
};
  
module.exports={changeProfileData,changePassword}