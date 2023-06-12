import styled from 'styled-components'

export const ModalContainer = styled.div`
   width: 100%;  
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  /* overflow: auto; */
  background-color: ${props => props.theme === 'about' ? '#F5BC4A' : '#516B84'};

  .exit {
    display: block;
    width: 73px;
    margin-left: 90%;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .about-title {
    font-size: 2.25rem;
    text-align: center;
    margin-bottom: 60px;
  }
  .content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 70%;
    width: 90%;
    margin: auto;
    grid-row-gap: 30px;
    grid-column-gap: 50px;
  }
  .topic {
    height: 100%;
    width: 100%;
    margin: 0 0px;;

    h3 {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      text-align: justify;
    }
  }


  @media (min-width: 325px )    {
    width: 53%;
    overflow: auto;
    .content-container {
      height: 90%;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-row-gap: 20px;
      grid-column-gap: 20px;
    }

    .about-title {
      font-size: 1.9rem;
      margin-bottom: 40px;
    }

    .exit {
      width: 50px;
      margin-left: 85%;
    }

    .topic {
      margin: 0 0px;

      h3 {
        font-size: 1.4rem;
        margin-bottom: 8px;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 326px) and (max-width: 839px){
    width: 53%;
    overflow: auto;
    .content-container {
      height: 90%;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-row-gap: 20px;
      grid-column-gap: 20px;
    }

    .about-title {
      font-size: 1.9rem;
      margin-bottom: 40px;
    }

    .exit {
      width: 50px;
      margin-left: 85%;
    }

    .topic {
      margin: 0 0px;

      h3 {
        font-size: 1.4rem;
        margin-bottom: 8px;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 840px) and (max-width: 1920px)  {
    width: 100%;
    overflow: auto;
    .content-container {
      height: 90%;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-row-gap: 30px;
      grid-column-gap: 50px;
    }

    .about-title {
      margin-bottom: 40px;
    }

    .exit {
      width: 73px;
      margin-left: 90%;
    }

    .topic {
      margin: 0 0px;

      h3 {
        font-size: 1rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`
