import React, { useEffect } from 'react';
import '../css/form2Instruction.css';
import '../css/index.css';
import { useNavigate } from 'react-router-dom';
import ucdb from '../assets/UCDB.jpg';
import currentQuestion from '../assets/answering.png';
import left from '../assets/left.gif';
import right from '../assets/right.gif';
import yes from '../assets/confirm_yes.gif';
import no from '../assets/confirm_no.gif';
import agreed from '../assets/positivo.png';


const Form2Instruction = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/form2')
    };
    
    useEffect(() => {
            const form1 = localStorage.getItem('form1');
            if (form1 == null) {
              navigate('/form1');
            }
    }, [navigate]);

  return (
      <div className="consent-form-wrapper">
          
        <img src={ucdb} alt="Marca d'água" className="water-mark"></img>
          
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
        <img src={left} className="img-fluid" alt="Exemplo" />

        <legend className="legend-perguntas">1- A melhor comida que existe é pizza</legend>
        <img src={right} className="img-fluid" alt="Exemplo" />


        <p className="p-principal">
            <span className='paragraph'>
                Para otimizar ao máximo sua interação com o próximo formulário de pesquisa, nós estruturamos o mesmo para trabalhar questão a questão,
                ou seja, você precisa responder uma questão e confirmar sua resposta para que a próxima seja liberada em sequência.
                A <b>pergunta atual</b> é ressaltada com uma <b>fonte em cor amarela</b>, enquanto as demais estão com uma <b>fonte em cor branca</b>.
                Você so conseguirá responder a pergunta com fonte amarela. Veja abaixo:
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
