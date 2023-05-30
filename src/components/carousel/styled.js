import styled from 'styled-components'

export const CarouselContainer = styled.div`
  height: 40%;
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 60px;

  .inner-carousel {
    width: 60%;
    height: 100%;
    overflow: hidden;
  }

  .prev, .next {
    width: 30px;
    display: inline;
    cursor: pointer;
  }

  .imageContainer {
    width: 100%;
    height: 100%;
    display: flex;
    transition: ease 1s;

    .image {
      width: 100%;
    }
  }
`
