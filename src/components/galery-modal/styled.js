import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  overflow: auto;
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
    margin: 0 15px;

    h3 {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.93rem;
      text-align: justify;
    }
  }
`
