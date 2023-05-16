import styled from 'styled-components'

const NavBarComponent = styled.nav`
  background-color: #F2F5F7;
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

  button {
    background-color: #F2F5F7;
    width: 146px;
    height: 40px;
    border: 1px solid #424B5A;
    border-radius: 3px;
  }
`

export default NavBarComponent
