import Facebook from '../parceires/face-icon.png'
import Twitter from '../parceires/twitter-icon.png'
import Instagram from '../parceires/instagram-icon.png'
import Whatsapp from '../parceires/whatsapp-icon.png'
import foto from '../parceires/fot.png'
import ParceireComponents from './styled.js'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
const linkParceire = process.env.REACT_APP_LINK_PARCEIRO

const Parceires = () => {
  return (
    <ParceireComponents>
        <h2>Parceires</h2>
          <p>
            A Nossa Casa é uma Associação sem fins lucrativos, composta por profissionais, artistas e ativistas do Município de Guarulhos.
          </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        <section className='parceires'>
          <div className="swiper-slide">
            <SwiperSlide>
              <div className='perfil'>
                <div>
                  <img className='img-perfil' src={foto} />
                </div>
                <h3>Fulano</h3>
                <p>CEO</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className='icones-rede-sociais'>
                  <a className='icones' href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp} /></a>
                  <a className='icones' href={'#'}><img src={Twitter} /></a>
                  <a className='icones' href={'#'}><img src={Facebook} /></a>
                  <a className='icones' href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram} /></a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='perfil'>
                <div>
                  <img className='img-perfil' src={foto} />
                </div>
                <h3>Fulano</h3>
                <p>CEO</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className='icones-rede-sociais'>
                  <a className='icones' href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp} /></a>
                  <a className='icones' href={'#'}><img src={Twitter} /></a>
                  <a className='icones' href={'#'}><img src={Facebook} /></a>
                  <a className='icones' href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram} /></a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='perfil'>
                <div>
                  <img className='img-perfil' src={foto} />
                </div>
                <h3>Fulano</h3>
                <p>CEO</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className='icones-rede-sociais'>
                  <a className='icones' href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp} /></a>
                  <a className='icones' href={'#'}><img src={Twitter} /></a>
                  <a className='icones' href={'#'}><img src={Facebook} /></a>
                  <a className='icones' href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram} /></a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='perfil'>
                <div>
                  <img className='img-perfil' src={foto} />
                </div>
                <h3>Fulano</h3>
                <p>CEO</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className='icones-rede-sociais'>
                  <a className='icones' href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp} /></a>
                  <a className='icones' href={'#'}><img src={Twitter} /></a>
                  <a className='icones' href={'#'}><img src={Facebook} /></a>
                  <a className='icones' href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram} /></a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='perfil'>
                <div>
                  <img className='img-perfil' src={foto} />
                </div>
                <h3>Fulano</h3>
                <p>CEO</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className='icones-rede-sociais'>
                  <a className='icones' href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp} /></a>
                  <a className='icones' href={'#'}><img src={Twitter} /></a>
                  <a className='icones' href={'#'}><img src={Facebook} /></a>
                  <a className='icones' href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram} /></a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='perfil'>
                <div>
                  <img className='img-perfil' src={foto} />
                </div>
                <h3>Fulano</h3>
                <p>CEO</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className='icones-rede-sociais'>
                  <a className='icones' href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp} /></a>
                  <a className='icones' href={'#'}><img src={Twitter} /></a>
                  <a className='icones' href={'#'}><img src={Facebook} /></a>
                  <a className='icones' href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram} /></a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='perfil'>
                <div>
                  <img className='img-perfil' src={foto} />
                </div>
                <h3>Fulano</h3>
                <p>CEO</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className='icones-rede-sociais'>
                  <a className='icones' href={'https://chat.whatsapp.com/BndMXO2VZY7CS04IiJ9An2'}><img src={Whatsapp} /></a>
                  <a className='icones' href={'#'}><img src={Twitter} /></a>
                  <a className='icones' href={'#'}><img src={Facebook} /></a>
                  <a className='icones' href={'https://www.instagram.com/nossacasa_at/'}><img src={Instagram} /></a>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </section>
        <div className='button-parceire'>
        <a target='_blank' href={linkParceire} rel="noreferrer" className='buttoon-parceire'>
          Ser parceire
        </a>
      </div>
      </Swiper>
    </ParceireComponents >
  )
}
export default Parceires
