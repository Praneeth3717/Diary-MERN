import {createContext, useEffect, useState} from "react"
export const userContext=createContext()
import PropTypes from "prop-types";

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
ShareUser.propTypes = {
    children: PropTypes.node.isRequired,
};
export default ShareUser;