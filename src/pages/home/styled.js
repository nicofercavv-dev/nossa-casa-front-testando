import styled from 'styled-components'

const Home = styled.div`

  background-color: white;
  width: 100%;
  height: 100vh;

  main {

    height: 100vh;

    .carrossel {
      height: 652px;
      background-color: #e9eef1;

      h1 {
        padding-left: 140px;
        padding-top: 60px;
        font-size: 2em;
      }
    }

    .about {

      background-color: #ffffff;
      height: 627px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      box-sizing: border-box;
      align-items: center;

      .content {

        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;

      }
      .content > div {

        width: 95%;
        margin: 0;

        h2 {

          font-size: 2.25rem;
          margin-bottom: 30px;

        }

        p {
          font-size: 1.4rem;
          font-weight: 500;
          line-height: 35px;

        }
      }

      button {

        background: #F5BC4A;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
        border-radius: 3px;
        color: #000000;
        border: none;
        font-size: 0.75rem;
        width: 163px;
        height: 56px;
        font-weight: 600;
        cursor: pointer;
        
      }
 
      .foto img {

        width: 80%;
        margin-left: 40px;

      } 
    }

    .galeria {
      height: 1036px;
      background-color: #516b84;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      h2 {
        text-align: center;
        font-size: 3.125rem;
        color: #516B84;
      }

      .painel {
        height: 55%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
      }

      button {
        background: linear-gradient(180deg, #516b848f 0%, #ffffff 100%);
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
        border-radius: 3px;
        color: #000000;
        border: none;
        font-size: 0.75rem;
        width: 182px;
        height: 40px;
        cursor: pointer;
        
      }
    }

    .parceires {
      background-color: aliceblue;
      height: 697px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: 2.5rem;
        margin-top: 30px;
        margin-bottom: 10px;
      }

      p {
        margin-bottom: 40px;
      }

      .carrossel-perfis {
        height: 60%;
        display: flex;
        justify-content: center;
        gap: 20px;

        .perfil {
          background-color: cadetblue;
          width: 30%;

          h3 {
            text-align: center;
          }

          p {
            text-align: center;
          }
        }
      }
    }
  }

 
  

  @media (max-width: 700px) {
    main .about {
      height: auto;
      padding: 10px;
      align-items: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
    }
    button{
      margin-left: -55%;
    }
    main .about .content {
      display: grid;
      grid-template-columns: none !important;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-left: 0px;
      
      h2{
        color: #516B84;
      }

      p{
        color: #54636F
      }
      .content .text {
        h2 {
          display: flex;
          font-size: 1.9rem !important;
          padding-top: 10px !important;
          text-align: justify;
         
        }

        p {
          display: flex;
          font-size: 10px;
        }
      }

      .foto {
        max-width: 100%;
        height: auto;
        align-items: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        position: relative;
      }

      .foto img {
        margin: auto;
        display: block;
        width: 100%;
        padding: 15px;
      }
    }
  }

  
  @media screen and (min-width: 720px ) and (max-width:1920px) {
    main .about {
      height: auto;
      padding: 10px;
      align-items: center;
    }

    button{
      margin: auto;
    }

    main .about .content {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      
      h2 { 
    
          font-size: 1.9rem ;
          padding-top: 10px ;
          color: #516B84;
        }
     p{
      
      font-size: 10px;
      color: #54636F;
     }
     

      .foto {
        max-width: 100%;
        height: auto;
        position: relative;
        grid-column-start: 20px;
         align-items: center;

      }

      .foto img {
        display: block;
         max-width: 100%; 
        padding: 15px;
        margin: auto;
      }
    }
  }

`

export default Home
