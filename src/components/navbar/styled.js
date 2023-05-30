import styled from 'styled-components'

const NavBarComponent = styled.nav`
  background-color: black;
  height: 4em;
  display: flex;
  align-items: center;
  padding: 0 5%;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    
   
    
    a {
      color: #ffffff;
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

     &:hover {
     color: #F5BC4A;
    }
    }
  }


  button {
    background: rgb(81,107,132);
    background: linear-gradient(180deg, rgba(81,107,132,1) 0%, rgba(187,197,207,1) 50%, rgba(255,255,255,1) 100%);
    width: 146px;
    height: 40px;
    border-radius: 3px;
    &:active {
      color: background: rgb(81,107,132);
      background: linear-gradient(360deg, rgba(81,107,132,1) 0%, rgba(187,197,207,1) 50%, rgba(255,255,255,1) 100%);
    }
  }

  .container-logo {
    max-height: 100%;
    width: auto;
    height: 100%;
    display: flex; 
   

  img{
    width: 73px;
    height: 67px;
    left: 110px;
    top: 67px;
    border-radius: 250px;
  }
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
