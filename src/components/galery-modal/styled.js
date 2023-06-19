import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width:auto;
  max-height:auto;
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
  body {
    overflow-x: hidden;
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

 
//IOS
  @media (max-width: 820px) {
    .content-container {
      height: 90%;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-row-gap: 20px;
      grid-column-gap: 20px;
    }
    

    .about-title {
      width: 48%;
      font-size: 1.9rem;
      margin-bottom: 10%;
    }

    .exit {
      margin-left: 55%;
    }

    .topic {
       width: 78%;
      /* width: 25%; */
      margin: 0 -20px;

      h3 {
         width: 50%; 
        font-size: 1.3rem;
        margin-bottom: 8px;
      }

      p {
          /* width: auto; */
        font-size: 1rem;
      }
    }
  }


   /* @media screen and (max-width: 415px ){
    width: 100%;
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
  }  */

  //tablet
    @media screen and (min-width: 840px)  {
      .content-container {
      height: 90%;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-row-gap: 10px;
      grid-column-gap: 10px;
      margin: 0 0 20px;
      padding: 30px;
    }
    

    .about-title {
      width: 38%;
      font-size: 1.9rem;
      margin: 0;
      padding: 0;
    }

    .exit {
      margin-left: 55%;
    }

    .topic {
       width: 68%;
      /* width: 25%; */
      margin: 0 -20px;

      h3 { 
        font-size: 1.3rem;
        margin-bottom: 0px;
      }

      p {
          /* width: auto; */
        font-size: 1rem;
      }
    }
  }
  `
