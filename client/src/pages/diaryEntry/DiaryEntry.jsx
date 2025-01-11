import {useState} from 'react';
import './DiaryEntry.css';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const DiaryEntry = () => {
  const {userId}=useParams()
  const urldiary=`http://localhost:9574/api/diary/writeDiary/${userId}`
  const [text, setText] = useState('');

  const handleAddEntry = async(event) => {
    event.preventDefault()
    if (text.trim()) {
      const newEntry = { userId: userId, text: text.trim(), createdAt: new Date() };
      try {
        const response=await axios.post(urldiary,newEntry)
        if(response.data.success){
          alert("entry done")
          setText('');
        }
        else{
          alert(response.data.message)
        }
      } catch (error) {
        console.error("Error adding entry:", error);
      alert("Failed to add entry. Please try again.");
    }}
    else {
      alert("Please write something before adding an entry.");
    }
  };


  return (
    <div className='Diary'>
      <div className="diary-container">
      <header className="diary-header">
        <h1>Write Your Entry</h1>
      </header>

      <div className="entry-box">
        <textarea
          className="diary-textarea"
          placeholder="Write your thoughts here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add-entry-button" onClick={handleAddEntry}>
          Add Entry
        </button>
      </div>

      <Link to="./viewDiaryEntries" className="navigation-link">View Entries</Link>
    </div>
    </div>
  )
}

export default DiaryEntry
