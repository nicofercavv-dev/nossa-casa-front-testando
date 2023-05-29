import styled from 'styled-components'

const NavBarComponent = styled.nav`
  background-color: #F5BC4A;
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  

  div {
    width: 43%;
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

 img{
 max-height: 100%;
 width: 6%;
 display: flex; 
 justify-content: space-between;
 

 }

`
export default NavBarComponent
