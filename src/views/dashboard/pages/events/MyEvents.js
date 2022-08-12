import axios from 'axios'
import React, {useState,  useEffect } from 'react'
import MyEvent from './MyEvent'
import "./myEvents.css"

const MyEvents = () => {
  const[eventDate, setEventDate] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/fakeEvents").
    then((result) => setEventDate(result.data)).
    catch((error) => console.log(error))
  }, [])

  return (
    <div className='my-events-container'>
      <div className='my-events-header'>
        <div className='my-events-header-filter'>
          <div>
            <p>Filter by date:</p>
            <div></div>
            <input type="date" id='filter-date'/>
          </div>    
          <div>
            <p>Search Events</p>
            <input type="search" id='filter-search'/>
          </div>
        </div>
        <button>Create Event</button>
      </div>
      <div className='my-events-cards'>
        {eventDate.length > 0
          ? eventDate.map((event) => <MyEvent event={event} />)
          :<h5 style={{textAlign: "center"}}> No Event</h5>
        }
        

      </div>
    </div>
  )
}

export default MyEvents