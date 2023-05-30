import styled from 'styled-components'

const CarouselSlidesContainer = styled.div`
  width: 42%;
  height: 7%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 18px;
  overflow: hidden;

  img {
    width: 60px;
    box-sizing: border-box;
    border: 3px solid #516B84;
  }

  .active {
    border: 3px solid #F5BC4A;
    animation: appear 1s;
  }

  @keyframes appear {
    0% {
      border: 3px solid #516B84;
    }
    100%{
      border: 3px solid #F5BC4A;
    }
  }
`
export default CarouselSlidesContainer
