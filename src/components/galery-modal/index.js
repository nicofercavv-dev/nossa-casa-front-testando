import { ModalContainer } from './styled'
import { useState } from 'react'
import closeIcon from './close-icon.svg'
import CarouselGalery from '../carousel'
import CarouselSlides from '../carousel-slides'
import teste from './imagemteste.png'
import teste2 from './teste2.png'
import teste3 from './teste3.png'

const ModalGalery = () => {
  const [photos, setPhotos] = useState([teste, teste2, teste3])
  const [toggleGalery, setToggleGalery] = useState(false)

  if (!photos) {
    setPhotos([teste, teste2, teste3])
  }

  return <>
    <button onClick={() => setToggleGalery(!toggleGalery)}>Ver mais</button>
    {toggleGalery &&
      <ModalContainer>
        <img className='exit' src={closeIcon} onClick={() => setToggleGalery(!toggleGalery)}/>
        <CarouselGalery photosArr={photos} />
        <CarouselSlides photos={photos} />
      </ModalContainer>}
  </>
}

export default ModalGalery
