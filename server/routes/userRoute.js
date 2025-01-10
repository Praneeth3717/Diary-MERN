const express=require('express')
const {loginUser,registerUser,getUserbyEmail,getUserbyId}=require('../controller/userController')
const {changeProfileData,changePassword}=require('../controller/profileController')

const userRouter=express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/verifyUser',loginUser)
userRouter.get('/getUser',getUserbyEmail)
userRouter.put('/update/:userId',changeProfileData)
userRouter.put('/updatePass/:userId',changePassword)

module.exports={userRouter}