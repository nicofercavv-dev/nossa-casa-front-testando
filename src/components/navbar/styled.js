import styled from 'styled-components'

const NavBarComponent = styled.nav`
  background-color: #F5BC4A;
  height: 4em;
  display: flex;
  align-items: center;
  padding: 0 5%;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    
   
    
    a {
      color: black;
      text-decoration: none;
      text-align: center;
      padding: 20px;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 14px;
       /* identical to box height */

     text-align: center;
     text-transform: uppercase;
    }
  }

  button {
    background-color: #F2F5F7;
    width: 146px;
    height: 40px;
    border: 1px solid #424B5A;
    border-radius: 3px;
  }

  .container-logo {
    max-height: 100%;
    width: auto;
    height: 100%;
    display: flex; 
  
  }

  @media (max-width: 768px) {
    /* Estilos para telas menores que 768px */
    div {
      padding: 0 2%;
    }
    
    button {
      width: 120px;
    }
  }

  @media (max-width: 480px) {
    /* Estilos para telas menores que 480px */
    div {
      padding: 0 1%;
    }
    
    button {
      width: 100px;
    }
  }
`

export default NavBarComponent
