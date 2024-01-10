import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useAuthContext } from '../../../hooks/useAuthContext'

import ConfirmWindow from '../../../Components/ConfirmWindow/ConfirmWindow.styled'
import { useFormik } from 'formik'
import validationSchema from './eventForm/validationSchema'
import Loader from '../../../Components/Loader/Loader.styled'

const Events = ({className}) => {
    const [events, setEvents] = useState([])
    const {user} = useAuthContext()
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null)
    const [unabled, setUnabled] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [loadingEvents, setLoadingEvents] = useState(false)

    // load events from DB
    const fetchEvents = async () => {
      setLoadingEvents(true)
      try {
        const response = await axios.get('https://mern-backend-9pmg.onrender.com/api/dashboard/events-list')
        setEvents(response.data)
      } catch (error) {
        console.log('Error fetching events', error)
      }
      setLoadingEvents(false)
      
    }
    // initial fetch
    useEffect(() => {
        
      fetchEvents()
      if(user.role === 'admin'){setUnabled(false)}
      if(user.role ==='test-admin'){setUnabled(true)}
  }, [user])

  // form logic
  // formik
  const formik = useFormik({
    initialValues: {
      title: '',
      snippet: '',
      desc: '',
      date: '',
      picture: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true)
      // FormData is a built-in JavaScript object that provides a way to easily construct a set of key/value pairs representing 
      // form fields and their values. It is commonly used to create and send multipart/form-data requests, which is the format 
      // used when uploading files through a form.
  
      // This object will be used to append the key-value pairs representing the data you want to send in the request
      try {
        const postData = new FormData()
        postData.append('title', values.title)
        postData.append('desc', values.desc)
        postData.append('snippet', values.snippet)
        postData.append('date', values.date)
        postData.append('picture', values.picture)
        await axios.post('https://mern-backend-9pmg.onrender.com/api/dashboard/events', postData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        setIsLoading(false)
        alert('Event created successfully!')
        fetchEvents()
        formik.resetForm()
      } catch (error) {
        console.log(error)
        alert('Error creating event')
      }
    }
  })

  //deletion modal
  const handleDeleteClick = (classs) => {
    setEventToDelete(classs);
    setShowDeleteModal(true)
  }

  const handleDeleteConfirm = async () => {
    // delete class from database
        const response = await axios.delete('https://mern-backend-9pmg.onrender.com/api/dashboard/events/' + eventToDelete._id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        if (response.status === 200) {
            console.log(response.data.message)
        }
        setEvents((prevEvents) => {
            return prevEvents.filter((item) => item._id !== eventToDelete._id
            )
        })
        setShowDeleteModal(false)
  }

  const handleModalClose = () => {
    setShowDeleteModal(false)
  }

  const dateFormater = (date) => {
    const dt = new Date(date)
    const year = dt.getFullYear()
    const month = dt.getMonth()
    const day = dt.getDate()
    const hours = dt.getHours()
    const minutes = dt.getMinutes()
    return `${year}/${month+1}/${day} ${hours}:${minutes.toLocaleString('en-US', {minimumIntegerDigits: 2})}`

  }

    return (
      <section className={className}>

        <div className="left">
          <h2>Events</h2>
          <div className="events">
            {loadingEvents ? <h2>Loading events...</h2> : null}
            {events && events.map((event, index) => {
              return (
                  <div key={event._id} className="item">

                    <div className="item-top">
                      <div className="left">
                        <img src={`https://mern-backend-9pmg.onrender.com/${event.picture}`} alt="" />
                      </div>

                      <div className="right">
                          <h3>{event.title}</h3>
                          <p className="date">{dateFormater(event.date)}</p>
                          <p className="desc">{event.desc}</p>
                          
                      </div>
                    </div>

                    <div className="buttons">
                            <button disabled={unabled} title="Only admin can edit classes">Edit</button>
                            <button disabled={unabled} title="Only admin can delete classes" onClick={() => handleDeleteClick(event)}>Delete</button>
                        </div>
                      
                  </div>
                  
              )
            })}
            {showDeleteModal ? <ConfirmWindow 
                                        onClose={handleModalClose}
                                        onDelete={handleDeleteConfirm}
                                        content={`Are you sure you want to delete ${eventToDelete.title}`}
                                            /> : null}
          </div>
        </div>

        <div className="right">
            <h2>Add a new event</h2>
                <form onSubmit={formik.handleSubmit}>
                    
                    <input 
                      type="text" 
                      name="title" id="title" 
                      placeholder='Title'
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.title && formik.errors.title && (
                      <span className='err'>{formik.errors.title}</span>
                    )}

                    <input 
                      type='text' 
                      name='snippet'
                      placeholder='Snippet'
                      value={formik.values.snippet}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.snippet && formik.errors.snippet && (
                      <span className='err'>{formik.errors.snippet}</span>
                    )}

                    <textarea 
                      name="desc" 
                      cols="30" rows="10" 
                      placeholder='Description'
                      value={formik.values.desc}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.touched.desc && formik.errors.desc && (
                      <span className='err'>{formik.errors.desc}</span>
                    )}

                    <input 
                      type="datetime-local" 
                      name="date" 
                      placeholder='Date and time'
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.date && formik.errors.date && (
                      <span className='err'>{formik.errors.date}</span>
                    )}

                    <input 
                      type='file'
                      name='picture'
                      onChange={(event) => formik.setFieldValue('picture', event.currentTarget.files[0])}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.picture && formik.errors.picture && (
                      <span className='err'>{formik.errors.picture}</span>
                    )}
                    
                    
                    <button type="submit">Submit</button>
                    <Loader loading={isLoading}/>
                </form>
        </div>

      </section>
    )
  }

export default Events
