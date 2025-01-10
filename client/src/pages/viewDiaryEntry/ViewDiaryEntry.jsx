import React, { useContext, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import './ViewDiaryEntry.css'
import { userContext } from '../../context/context'
import axios from 'axios'

const ViewDiaryEntry = () => {
  const {userId}=useParams();
  const urlEntries=`http://localhost:9574/api/diary/getDiaryEntries/${userId}`
  const {setDiaryEntries,DiaryEntries}=useContext(userContext)
  useEffect(()=>{
    const getEntries=async()=>{
      try {
        const response=await axios.get(urlEntries)
        if(response.data.success){
           setDiaryEntries(response.data.Entries)
        }
       else {
        console.error("Invalid response format:", response.data);
      }
      } catch (error) {
        console.error("Error adding entry:", error);
      }
    }
    getEntries()
  },[urlEntries,setDiaryEntries])

  return (
    <div>
      <div className="diary-container">
      <header className="diary-header">
        <h1>Your Entries</h1>
      </header>

      <div className="entries">
        {DiaryEntries.length === 0 ? (
          <p>No entries yet. Start writing!</p>
        ) : (
          DiaryEntries.map((entry, index) => (
            <div key={index} className="entry">
              <p className="entry-text">{entry.text}</p>
              <span className="entry-date">
                {new Date(entry.createdAt).toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          ))
        )}
      </div>

      <Link to={`../${userId}/DiaryEntry`} className="navigation-link">Write New Entry</Link>
    </div>
    </div>
  )
}

export default ViewDiaryEntry
