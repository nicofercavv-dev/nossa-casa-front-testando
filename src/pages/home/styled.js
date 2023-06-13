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

      background-color: #f5bc4a;
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

        background: linear-gradient(180deg, #516b848f 0%, #ffffff 100%);
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
        border-radius: 3px;
        color: #000000;
        border: none;
        font-size: 0.75rem;
        width: 168px;
        height: 40px;
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
        color: #ffffff;
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

  @media (min-width: 320px) and (max-width: 700px) {
    main .about {
      height: auto;
      padding: 10px;
      align-items: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
    }
    main .about .content {
      display: grid;
      grid-template-columns: none !important;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-left: 0px;

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
          color: #516b84;
          text-align: justify;
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
`

export default Home
