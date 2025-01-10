const mongoose=require('mongoose')

const diarySchema=new mongoose.Schema({
    userId:{type:String,required:true},
    text:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
})

const diaryModel = mongoose.models.diary || mongoose.model('diary', diarySchema);

module.exports=diaryModel