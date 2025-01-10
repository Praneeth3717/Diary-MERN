const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const { userRouter } = require('./routes/userRoute')
const {diaryRouter}=require('./routes/diaryRoute')
const cors=require('cors')

const app=express()
dotenv.config()

const PORT=process.env.PORT || 3000;
const MONGO_URL=process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("DB Connected Successfully");
    app.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})
.catch((error)=>{
    console.log(error);
})

app.use(express.json())
app.use(cors());
app.use('/api/user',userRouter)
app.use('/api/diary',diaryRouter)