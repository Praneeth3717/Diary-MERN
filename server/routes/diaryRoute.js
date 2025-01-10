const express=require('express')
const {writeDiary,viewDiaries}=require('../controller/diaryController')

const diaryRouter=express.Router()

diaryRouter.post('/writeDiary/:userId',writeDiary)
diaryRouter.get('/getDiaryEntries/:userId',viewDiaries)

module.exports={diaryRouter}