import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBarComponent from './styled'

const NavBar = () => {
  return (
    <NavBarComponent>
      <h2>Nossa Casa</h2>
      <div>
        <NavLink to={'/'}>Sobre</NavLink>
        <NavLink to={'/artandculture'}>Arte e Cultura</NavLink>
        <NavLink to={'/events'}>Eventos</NavLink>
        <NavLink to={'/therapies'}>Terapias</NavLink>
        <NavLink to={'/education'}>Educação</NavLink>
        <NavLink to={'/workshops'}>Oficinas</NavLink>
        <NavLink to={'/projects'}>Projetos</NavLink>
      </div>
      <button>Seja parceire</button>
    </NavBarComponent>
  )
}

export default NavBar
