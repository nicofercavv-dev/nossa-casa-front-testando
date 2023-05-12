import Therapies from './styled'
import foto from './fot.png'
import social from '../home/Black.png'
import NavBar from '../../components/navbar/index'

export const TherapiesPage = () => {
  return (
    <Therapies>
      <NavBar />
      <main>
        <section className='carrossel'>
          <h1>TERAPIAS</h1>
        </section>

        <section className='search'>
          <div className='search-box'>
            <div>
              <input type='text' placeholder='Busca' className='search-input'></input>
            </div>
          </div>
        </section>

      <section className='terapias'>
        <h1>Terapias</h1>
        <div >
          <ul className='painel'>
             <li >
                <img src={foto} />
                <p>Impact Of Extrinsic Motivation On Intrinsic Motivation</p>
                <button>ver mais</button>
             </li>

             <li>
                <img src={foto} />
                <p>Impact Of Extrinsic Motivation On Intrinsic Motivation</p>
                <button>ver mais</button>
             </li>

             <li>
                <img src={foto} />
                <p>Impact Of Extrinsic Motivation On Intrinsic Motivation</p>
                <button>ver mais</button>
             </li>
         </ul>
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
    </Therapies>
  )
}
