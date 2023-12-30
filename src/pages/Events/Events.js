import React, { useState, useEffect } from 'react'
import axios from 'axios'
import posterPic from './poster-pic.jpg'
import BlueDivider from '../../Components/BlueWave/BlueWave.styled'
import FlexContainer from '../../Components/FlexibleContainer'
import ContactForm from '../../Components/ContactForm/ContactForm.styled'


const Events = ({className}) => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('https://mern-backend-9pmg.onrender.com/api/events')
      setEvents(response.data)
    }
    fetchEvents()
  }, [])

  const dateFormater = (date) => {
    const dt = new Date(date)
    const year = dt.getFullYear()
    const month = dt.getMonth()
    const day = dt.getDate()
    const hours = dt.getHours()
    const minutes = dt.getMinutes()
    return `${year}/${month+1}/${day} ${hours}:${minutes}`

  }

  return (
    <main className={className}>
      <div className="poster" >
        <h1>Events</h1>
        <img src={posterPic} alt="" />
        <div className="overlay"></div>
      </div>

      <div className="events">
        {events && events.map((event, index) => {
          return (
            <div key={event._id} className='event'>
              <FlexContainer className="event-content">
                <img src={`https://mern-backend-9pmg.onrender.com/${event.picture}`} alt="" />
                <div className="right-col">
                  <h2>{event.title}</h2>
                  <p className="date">{dateFormater(event.date)}</p>
                  <p className='desc'>{event.desc}</p>
                  
                  
                </div>
              </FlexContainer>
              {index < (events.length - 1) && <BlueDivider/>}
            </div>
          )
        })}
        
      </div>

        <ContactForm />
    </main>
  )
}

export default Events
