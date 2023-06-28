import styled from 'styled-components'

const ParceireComponents = styled.section`


.parceires {
  background-color: rgba(245, 188, 74, 1);
  height: 697px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
  .parceires {
    height: 60%;
    display: flex;
    justify-content: center;
    gap: 20px;

  }
  }

  h2 {
    display:flex;
    justify-content: center;
    font-size: 2.5rem;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 40px;
    display:flex;
    justify-content: center;
  }


  .img-perfil{
    width: 45%;
    height: 40%;
    border-radius: 80%;
    margin-bottom: 20px;
    margin-left: 28%;
  }

  h3 {
    text-align: center;
    margin-bottom: 20px;
    }

    p {
      text-align: center;
    }

    
    .icones-rede-sociais, .icones{
      margin-left: 40%;
      border-radius: none;
      width: 30px;
      height: 20px;
    }     
      

}




.button-parceire{
  font-color: white;
  background: #516B84;
  border-radius: 3px;
  border: none;
  font-size: 14px;
  width: 182px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.buttoon-parceire{
  font-color:white;
  background: #516B84;
  border-radius: 3px;
  border: none;
  font-size: 14px;
  width: 182px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
`
export default ParceireComponents
