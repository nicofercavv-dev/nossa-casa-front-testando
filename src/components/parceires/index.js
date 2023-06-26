import Facebook from '../parceires/face-icon.png'
import Twitter from '../parceires/twitter-icon.png'
import Instagram from '../parceires/instagram-icon.png'
import Whatsapp from '../parceires/whatsapp-icon.png'
import foto from '../parceires/fot.png'
import ParceireComponents from './styled.js'
const linkParceire = process.env.REACT_APP_LINK_PARCEIRO

const Parceires = () => {
  return (
    <ParceireComponents>
      <section className='parceires'>
        <h2>Parceires</h2>
        <p>
          A Nossa Casa é uma Associação sem fins lucrativos, composta por profissionais, artistas e ativistas do Município de Guarulhos.
        </p>
        <div className='carrossel-perfis'>
          <div className='perfil'>
            <div>
              <img src={foto} />
            </div>
            <h3>Fulano</h3>
            <p>CEO</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className='icones-rede-sociais'>
              <a href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp} /></a>
              <a href={'#'}><img src={Twitter} /></a>
              <a href={'#'}><img src={Facebook} /></a>
              <a href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram} /></a>
            </div>
          </div>
          <div className='perfil'>
            <div>
              <img src={foto} />
            </div>
            <h3>Fulano</h3>
            <p>CEO</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className='icones-rede-sociais'>
              <a href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp} /></a>
              <a href={'#'}><img src={Twitter} /></a>
              <a href={'#'}><img src={Facebook} /></a>
              <a href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram} /></a>
            </div>
          </div>
          <div className='perfil'>
            <div>
              <img src={foto} />
            </div>
            <h3>Fulano</h3>
            <p>CEO</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className='icones-rede-sociais'>
              <a href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp} /></a>
              <a href={'#'}><img src={Twitter} /></a>
              <a href={'#'}><img src={Facebook} /></a>
              <a href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram} /></a>
            </div>
          </div>
        </div>
        <a href={linkParceire}>
          <button>Seja Parceire</button>
        </a>
      </section>
    </ParceireComponents>
  )
}
export default Parceires
