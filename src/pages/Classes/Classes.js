import React, {useState, useEffect} from 'react'
import classesPoster from './classes-poster.jpg'
import axios from 'axios'

import FlexContainer from '../../Components/FlexibleContainer'
import BlueDivider from '../../Components/BlueWave/BlueWave.styled'
import ContactForm from '../../Components/ContactForm/ContactForm.styled'

const Classes = ({className}) => {
  const [classes, setClasses] = useState([])
  const [loadingClasses, setLoadingClasses] = useState(false)
  useEffect(() => {
    const fetchClasses = async () => {
      setLoadingClasses(true)
      const response = await axios.get('https://mern-backend-9pmg.onrender.com/api/classes')
      setClasses(response.data)
      setLoadingClasses(false)
    }
    fetchClasses()
  }, [])
  return (
    <main className={className}>

      <div className="poster" >
        <h1>Classes</h1>
        <img src={classesPoster} alt="" />
        <div className="overlay"></div>
      </div>

      <div className="classes">
      {loadingClasses ? <FlexContainer><h2>Loading classes...</h2></FlexContainer> : null}
        {classes && classes.map((classs, index) => {
          return (
            <div key={classs._id} className='classs'>
              <FlexContainer className="classs-content">
                <div className="right-col">
                  <h2>{classs.title}</h2>
                  <p className='date'>{classs.day}</p>
                  <p className='desc'>{classs.desc}</p>
                </div>
              </FlexContainer>
              {index < (classes.length - 1) && <BlueDivider/>}
            </div>
          )
        })}
      </div>
      <ContactForm />
    </main>
  )
}

export default Classes
