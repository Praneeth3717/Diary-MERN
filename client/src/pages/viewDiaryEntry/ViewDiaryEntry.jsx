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
    <div className='Entries'>
      <div className="diary-container-2">
      <header className="diary-header-2">
        <h1>Your Entries</h1>
      </header>

      <div className="entries-2">
        {DiaryEntries.length === 0 ? (
          <p>No entries yet. Start writing!</p>
        ) : (
          DiaryEntries.map((entry, index) => (
            <div key={index} className="entry-2">
              <p className="entry-text-2">{entry.text}</p>
              <span className="entry-date-2">
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

      <Link to={`../${userId}/DiaryEntry`} className="navigation-link-2">Write New Entry</Link>
    </div>
    </div>
  )
}

export default ViewDiaryEntry
