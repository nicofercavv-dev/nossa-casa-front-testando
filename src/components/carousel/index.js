import { CarouselContainer } from './styled'
import arrowLeft from './arrow-left.svg'
import arrowRight from './arrow-right.svg'
import teste from './imagemteste.png'
import { useState } from 'react'

const CarouselGalery = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return <CarouselContainer>
    <img className='prev' onClick={() => setCurrentSlide(currentSlide - 1)} src={arrowLeft} />
    <div className='imageContainer' style={{ transform: `translateX(${-currentSlide * 100}%)` }} >
      <img className='image' src={teste} />
      <img className='image' src={teste} />
      <img className='image' src={teste} />
    </div>
    <img className='next' onClick={() => setCurrentSlide(currentSlide + 1)} src={arrowRight} />
  </CarouselContainer>
}

export default CarouselGalery
