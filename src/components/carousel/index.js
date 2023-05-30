import { CarouselContainer } from './styled'
import arrowLeft from './arrow-left.svg'
import arrowRight from './arrow-right.svg'
import { useState } from 'react'
import CarouselSlidesContainer from '../carousel-slides/styled'

const CarouselGalery = ({ photosArr }) => {
  const [photos, setPhotos] = useState(photosArr)
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesLimit = 7

  if (!photos) {
    setPhotos(photosArr)
  }

  const verifyIfLastSlide = () => {
    if (currentSlide === photos.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const verifyIfFirstSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(photos.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (<>
    <CarouselContainer>
      <img className='prev' onClick={() => verifyIfFirstSlide()} src={arrowLeft} />
      <div className='inner-carousel'>
        <div className='imageContainer' style={{ transform: `translateX(${-currentSlide * 100}%)` }} >
          {photos.map(photo => <img key={photo} className='image' src={photo} />)}
        </div>
      </div>
      <img className='next' onClick={() => verifyIfLastSlide()} src={arrowRight} />
    </CarouselContainer>
    <CarouselSlidesContainer>
      {photos.map((photo, index) => <img key={photo} src={photo} className={index === currentSlide ? 'active' : ''} style={{ transform: `translateX(${currentSlide + 1 > slidesLimit ? -125 : 0}%)` }} />)}
    </CarouselSlidesContainer>
  </>)
}

export default CarouselGalery
