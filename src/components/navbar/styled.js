import styled from 'styled-components'

const NavBarComponent = styled.nav`
  background-color: antiquewhite;
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border: 1px solid black;

  div {
    width: 65%;
    display: flex;
    justify-content: space-between;
    font-size: 0.8em;

    a {
      color: black;
      text-decoration: none;
    }
  }
`

export default NavBarComponent
