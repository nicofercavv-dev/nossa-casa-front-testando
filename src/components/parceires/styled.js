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
  .button-parceire{
    background: #516B84;
    border-radius: 3px;
    color: white;
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
}
`
export default ParceireComponents
