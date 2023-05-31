import { ModalContainer } from './styled'
import { useState } from 'react'
import closeIcon from './close-icon.svg'

const ModalGalery = () => {
  const [toggleGalery, setToggleGalery] = useState(false)

  return <>
    <button onClick={() => setToggleGalery(!toggleGalery)}>Ver mais</button>
    {toggleGalery &&
      <ModalContainer>
        <img className='exit' src={closeIcon} onClick={() => setToggleGalery(!toggleGalery)}/>
      </ModalContainer>}
  </>
}

export default ModalGalery
