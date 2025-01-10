import {createContext, useEffect, useState} from "react"
export const userContext=createContext()

const ShareUser=({children})=>{
    const [Token,setToken]= useState("")
    const [UserData,setUserData]=useState({})
    const [DiaryEntries,setDiaryEntries]=useState([])
    useEffect(()=>{
        const getUserData=async()=>{
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                setUserData(JSON.parse(localStorage.getItem("Userdata")))
            }
        }
        getUserData()
    },[])
    return(
        <userContext.Provider value={{Token,setToken,setUserData,UserData,DiaryEntries,setDiaryEntries}}>
            {children}
        </userContext.Provider>
    )
}
export default ShareUser;