import { useEffect, useState } from 'react'
import { client } from '../../service/client'

export const WorkshopList = () => {
  const [workshop, setWorkshop] = useState([])
  useEffect(() => {
    client.get('/workshops').then(
      (response) => {
        return setWorkshop(response.data.data.map((workshop) => workshop.attributes))
      })
  }, [])
  return (
    <>
      <h1>Lista de Oficinas</h1>
        <ul>
        {workshop.map((user, index) => (
            <li key={index}>
              <br/>
              <p> Nome: {user.name}</p>
              <br/>
              <p> Descriçães: {user.description}</p>
            </li>
        ))}
    </ul>
    </>
  )
}
