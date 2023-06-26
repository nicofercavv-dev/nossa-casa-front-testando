import styled from 'styled-components'

const ParceireComponents = styled.section`
.parceires {
  background-color: rgba(245, 188, 74, 1);
  height: 697px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 40px;
  }
  .carrossel-perfis {
    height: 60%;
    display: flex;
    justify-content: center;
    gap: 20px;

    .perfil {
      width: 30%;

      img {
        width: 45%;
        height: 40%;
        border-radius: 80%;
        margin-bottom: 20px;
      }
      h3 {
      text-align: center;
      margin-bottom: 10px;
      }

      p {
        text-align: center;
      }
      div{
        display: flex;
        justify-content: center;
        align-items:center;
      }
      icones-rede-sociais{
        justify-content: center;
      }        
    } 
  }
  button{
    background: linear-gradient(180deg, #516B848F 0%, #FFFFFF 100%);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.40);
    border-radius: 3px;
    color: #000000;
    border: none;
    font-size: 14px;
    width: 182px;
    height: 40px;
    cursor: pointer;
  }
}
`
export default ParceireComponents
