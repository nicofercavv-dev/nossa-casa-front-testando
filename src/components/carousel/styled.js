import styled from 'styled-components'

export const CarouselContainer = styled.div`
  height: 40%;
  width: 70%;
  /* background-color: aliceblue; */
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 60px;

  .prev, .next {
    width: 30px;
    display: inline;
    cursor: pointer;
  }

  .imageContainer {
    width: 60%;
    height: 100%;
    display: flex;
    overflow: hidden;

    .image {
      width: 100%;
    }
  }
`
