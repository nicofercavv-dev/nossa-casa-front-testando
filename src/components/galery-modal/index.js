import { ModalContainer } from './styled'
import { useState } from 'react'
import closeIcon from './close-icon.svg'

const ModalGalery = () => {
  const [toggleGalery, setToggleGalery] = useState(false)

  const toggleGaleryHandler = () => {
    setToggleGalery(!toggleGalery)
  }

  return <>
    <button onClick={() => toggleGaleryHandler()}>Ver mais</button>
    {toggleGalery &&
      <ModalContainer>
        <img className='exit' src={closeIcon} onClick={() => toggleGaleryHandler()}/>
      </ModalContainer>}
  </>
}

export default ModalGalery
