import { CarouselContainer } from './styled'
import arrowLeft from './arrow-left.svg'
import arrowRight from './arrow-right.svg'
import { useState } from 'react'

const CarouselGalery = (photosArr) => {
  const [photos, setPhotos] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  console.log(photosArr)

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

  return <CarouselContainer>
    <img className='prev' onClick={() => verifyIfFirstSlide()} src={arrowLeft} />
    <div className='inner-carousel'>
      <div className='imageContainer' style={{ transform: `translateX(${-currentSlide * 100}%)` }} >
        {photos.map(photo => <img key={photo} className='image' src={photo} />)}
      </div>
    </div>
    <img className='next' onClick={() => verifyIfLastSlide()} src={arrowRight} />
  </CarouselContainer>
}

export default CarouselGalery
