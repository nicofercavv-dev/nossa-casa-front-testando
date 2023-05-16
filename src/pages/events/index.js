import React from 'react'
import EventsContainer from './styled'
import evimg from '../home/Background.png'
import social from '../home/Black.png'
import NavBar from '../../components/navbar'

const EventsPage = () => {
  return (
    <EventsContainer>
      <NavBar />
      <main>
        <section className='carrossel'>
          <h1>EVENTOS</h1>
        </section>
        <section className='search'>
          <form>
            <input type='text' placeholder='Buscar' />
          </form>
        </section>
        <section className='carrossel-eventos'>
          <div className='evento'>
            <img src={evimg} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
          <div className='evento'>
            <img src={evimg} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
          <div className='evento'>
            <img src={evimg} />
            <p>22 Oct 2018</p>
            <h3>Impact Of Extrinsic Motivation On Intrinsic Motivation</h3>
            <button>VER MAIS</button>
          </div>
        </section>
        <section className='parceires'>
          <h2>Parceires</h2>
          <p>
            A Nossa Casa é uma Associação sem fins lucrativos, composta por profissionais, artistas e ativistas do Município de Guarulhos.
          </p>
          <div className='carrossel-perfis'>
            <div className='perfil'>
              <img />
              <h3>Fulano</h3>
              <p>CEO</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className='perfil'>
              <img />
              <h3>Fulano</h3>
              <p>CEO</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className='perfil'>
              <img />
              <h3>Fulano</h3>
              <p>CEO</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>
        </section>
        <footer>
          <h3>Nossa Casa</h3>
          <div>
            <img src={social}/>
            <img src={social}/>
            <img src={social}/>
            <img src={social}/>
            <img src={social}/>
          </div>
          <p>©2018 - Form  |   All right reserved</p>
        </footer>
      </main>
    </EventsContainer>
  )
}

export default EventsPage
