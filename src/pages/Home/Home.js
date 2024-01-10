import React, {
  useState, 
  useEffect
} from 'react'

//components
import BlueDivider from '../../Components/BlueWave/BlueWave.styled'
import WhiteDivider from '../../Components/WhiteWave/WhiteWave.styled'
import FlexContainer from '../../Components/FlexibleContainer'
import ContactForm from '../../Components/ContactForm/ContactForm.styled'

//assets
import banner from './banner.webp'
import bannerMed from './banner_med.webp'
import bannerSm from './banner_sm.webp'
import logo from '../../assets/logg.svg'
import avatar from '../../assets/avatar.png'
import arrowIcon from './arrow-icon.svg'

//packages
import axios from 'axios'


const Home = ({className}) => {
  const [events, setEvents] = useState([])
  const [loadingEvents, setLoadingEvents] = useState(false)
  useEffect(() => {
    const fetchEvents = async () => {
      setLoadingEvents(true)
      const response = await axios.get('https://mern-backend-9pmg.onrender.com/api/upcoming-events')
      setEvents(response.data)
      setLoadingEvents(false)
    }
    fetchEvents()
  }, [])

  let bannerImage
  if (window.innerWidth >= 993){bannerImage = banner}
  if (window.innerWidth <= 992 && window.innerWidth >= 576){bannerImage = bannerMed}
  if (window.innerWidth <= 575){bannerImage = bannerSm}

  function formatDate(date) {
    const dt = new Date(date)
    const month = dt.getMonth();
    const day = dt.getDate();
    return `${day}. ${month+1}.`;
  } 

  return (
    <main className={className}>

      <div className='banner'>
        <img className='logo' src={logo}  alt="" />
        {window.innerWidth >= 993 ? <img src={banner} alt="" /> : null}
        {window.innerWidth <= 992 && window.innerWidth >= 576 ? <img src={bannerMed} alt="" /> : null}
        {window.innerWidth <= 575 && <img src={bannerSm} alt="" />}
        <div className="overlay"></div>
      </div>
      <BlueDivider/>
      <BlueDivider className='shift-up'/>
      


      <FlexContainer>
        <div className="upcoming">
        <h2>Upcoming Events</h2>
        {loadingEvents ? <h3>Loading Events...</h3> : null}
          {events && events.map(event => {
            return (
              <div key={event._id} className='event'>
                <div className="left-column">
                  <img src={`https://mern-backend-9pmg.onrender.com/${event.picture}`} alt="" />
                  {
                    window.innerWidth <= 744 &&
                    <div className="overlay"></div>
                  }
                  <div className='circle' id='hover'>
                    
                    <div className="date">
                      {formatDate(event.date)}
                    </div>
                  </div>
                </div>
                <div className="right-column">
                  <h2>{event.title}</h2>
                  <p>{event.snippet}</p>
                  {
                    window.innerWidth <= 744 &&
                    <div className="arrow-icon"><img src={arrowIcon} alt='arrow icon'/></div>
                  }
                </div>
              </div>
            )
          })}
        </div>
      </FlexContainer>

      <div className='banner second'>
        <WhiteDivider className='shift-down'/>
        <div style={{background: `url(${bannerImage})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: "50% 65%"}} className='nevim'>
        
          <div className="mask">
            <h1>Immerse Yourself wellbeing with Lisa</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</p>
          </div>

        </div>
      </div>
        
        <FlexContainer>
          <div className="about-brief">
            <div className="avatar">
              <img src={avatar} alt="" />
              {
                window.innerWidth <= 589 &&
                <h2 className='mobile-only'>Lisa Meeham</h2>
              }
            </div>
            <div>
              <h2 className='desktop-only'>Lisa Meeham</h2>
              <p>Start Small and Build Up Incrementally— Don’t bite off more than you can chew. While it may be tempting to jump into the Full Primary Series, as a newbie to Ashtanga Yoga, I’d recommend that.</p>
            </div>
          </div>
        </FlexContainer>

      
          <ContactForm/>
        
      

    </main>
  )
}

export default Home
