const diaryModel=require('../model/diaryModel')

const writeDiary=async(req,res)=>{
    const {text,createdAt}=req.body
    const userId=req.params.userId
    if(!userId){
        return res.json({success:false,message:"No UserId available"})
    }
    try {
        const newEntry=new diaryModel({
            userId:userId,
            text:text,
            createdAt:createdAt
        })
        await newEntry.save()
        return res.json({success:true,message:"Successful"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

const viewDiaries=async(req,res)=>{
    try {
        const userId=req.params.userId
        const Entries=await diaryModel.find({userId})
        if(!Entries){
            return res.json({success:false,message:"no data found"})
        }
        return res.json({success:true,Entries})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

module.exports={writeDiary,viewDiaries}