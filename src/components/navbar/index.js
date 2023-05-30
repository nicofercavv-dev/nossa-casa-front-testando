import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBarComponent from './styled'
import logo from './logoMarca.png'

const NavBar = () => {
  return (
    <NavBarComponent>
     <div className='container-logo'>
     <img src={logo}/>
      </div>
     <div className='redirecionamento'>
        <NavLink to={'/'}>Sobre</NavLink>
        <NavLink to={'/events'}>Eventos</NavLink>
        <NavLink to={'/therapies'}>Terapias</NavLink>
        <NavLink to={'/workshops'}>Oficinas</NavLink>
      </div>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSfsRwJx-7Wa5VIOSFaH3DAAoOr3iTJFQ27qBOj5aJ5dHTUk1Q/viewform'>
      <button>Seja parceire</button>
      </a>
    </NavBarComponent>
  )
}
export default NavBar
