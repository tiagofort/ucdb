import React from 'react';
import '../css/form2Instruction.css';
import '../css/index.css';
import { useNavigate } from 'react-router-dom';
import exeLeft from '../assets/exe-gif-left.gif';
import exeRight from '../assets/exe-gif-right.gif';
import currentQuestion from '../assets/peruntaatual.png';
import yes from '../assets/sim.gif';
import no from '../assets/nao.gif';
import agreed from '../assets/positivo.png';


const Form2Instruction = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/form2')
  };

  return (
    <div className="consent-form-wrapper">
        <div className="consent-details-content ">
              
        <legend className="legenda-prin">
            QUESTIONÁRIO DE ATITUDES EM RELAÇÃO AO COMPORTAMENTO
        </legend>
   
        <p className="p-principal">
            <span className='paragraph'>
                O questionário a seguir pesquisa atitudes em relação ao <b>comportamento suicida</b>
            </span>.<br />
            <span className='paragraph'>
                Evite pensar demais para responder. Estamos interessados em sua resposta espontânea, a primeira
                ideia que lhe ocorrer, sem se preocupar se é “certo” ou “errado”.
            </span><br />
            <span className='paragraph'>
                Algumas informações solicitadas logo abaixo permitirão criar um código. Desse modo, você não será
                identificado quando analisarmos os dados.
            </span><br />
            <span className='paragraph'>
                Ao responder as questões, <b>posicione o scroll</b> na posição que mais se aproximar de sua opinião.
                Veja o exemplo abaixo:
            </span>
            
        </p>
      
        <legend className="legend-perguntas">1- Gosto de ouvir Sertanejo</legend>
        <img src={exeLeft} className="img-fluid" alt="Exemplo" />

        <legend className="legend-perguntas">1- A melhor comida que existe é pizza</legend>
        <img src={exeRight} className="img-fluid" alt="Exemplo" />


        <p className="p-principal">
            <span className='paragraph'>
                Para otimizar ao máximo sua interação com o próximo formulário de pesquisa, nós estruturamos o mesmo para trabalhar questão a questão,
                ou seja, você precisa responder uma questão e confirmar sua resposta para que a próxima seja liberada em sequência.
                A <b>pergunta atual</b> é ressaltada com um <b>fundo verde</b>. Veja abaixo:
            </span>
        </p>

        <img src={currentQuestion} className="img-fluid" alt="Pergunta atual" />
           
        <p className="p-principal">
            <span className='paragraph'>
                Para movimentar o scroll é necessário manter o botão do mouse pressionado (nos computadores) ou o dedo em contato (nos celulares e afins)
                e arrastá-lo para a direita ou para a esquerda, como mostrado nos exemplos acima. Toda vez que o botão do mouse ou o contato do dedo for
                liberado uma mensagem de confirmação de resposta será exibida.
            </span>
        </p>

        <p className="p-principal">
            <b>Se a resposta for a de agrado, clique SIM</b> (Exemplo abaixo):
        </p>

      
        <img src={yes} className="img-fluid" alt="Exemplo Sim" />
  

        <p className="p-principal">
            <b>Se você cometeu um equívoco ou não esta de acordo com a resposta, clique NÃO</b> (Exemplo abaixo):
        </p>


        <img src={no} className="img-fluid" alt="Exemplo Não" width="500" />
    </div>
    <button type="button" id="btSalvar" className="btn btn-lg btn-block" onClick={handleClick}>
        <img className="button-icon" src={agreed} alt="Ícone positivo" />
        Começar
    </button>
</div>
   
  );
};

export default Form2Instruction;
