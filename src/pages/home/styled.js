import styled from 'styled-components'

const Home = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;

  nav {
    background-color: antiquewhite;
    height: 61px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    border: 1px solid black;

    ol {
      width: 65%;
      display: flex;
      justify-content: space-between;
      font-size: 0.8em;
    }
  }

  main {
    background-color: blue;
    height: 100vh;
    .carrossel{
        height: 652px;
        background-color: grey;

        h1 {
          padding-left: 140px;
          padding-top: 60px;
          font-size: 2em;
        }
    }

    .about {
      background-color: beige;
      height: 627px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
      }
    }

    .galeria {
      height: 1036px;
      background-color: bisque;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      h2 {
        text-align: center;
        font-size: 2.5rem;
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
        font-size: 1.6rem;
        width: 220px;
        height: 60px;
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

    footer {
      background-color: darkgrey;
      height: 155px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      h3 {
        font-size: 1.5rem;
      }

      div {
        width: 15%;
        display: flex;
        justify-content: space-between;
      }
    }
  }

`

export default Home
