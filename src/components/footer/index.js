import FooterComponent from './styled'
import Instagram from './instagram_logo.png'
import NossaCasa from './nossa_casa_logo.png'
import Whatsapp from './whatsapp_logo.png'
import Twitter from './twitter_logo.png'
import Facebook from './facebook_logo.png'
import env from 'react-dotenv'

const Footer = () => {
  return (
    <FooterComponent>
    <footer>
      <img className='logo' src={NossaCasa}/>
      <div>
      <a href={env.URL_WHATSAPP}><img src={Whatsapp}/></a>
      <img src={Twitter}/>
      <img src={Facebook}/>
      <a href={env.URL_INSTAGRAM}><img src={Instagram}/></a>
      </div>
      <p>©2018 - Form  |   All right reserved</p>
    </footer>
    </FooterComponent>
  )
}

export default Footer
