
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../css/index.css'; // Use the global CSS
import '../css/form2.css';
import QuestionSlider from '../components/QuestionSlider';


function Form2() {
  return (
    <form className="form-wrapper"> 
        <h2 className="legenda-prin">
            Primeiro, gostaria de saber seus dados sociodemográficos com o objetivo de caracterizar quem participou desta pesquisa.
        </h2>

        <QuestionSlider 
            id='l1'
            question='1- Sinto-me capaz de ajudar uma pessoa que tentou se matar.'
        />

        <QuestionSlider 
            id='l2'
            question='2- Quem fica ameaçando, geralmente não se mata.'
        />

        <QuestionSlider 
            id='l3'
            question='3- Apesar de tudo, penso que uma pessoa tem o direito de se matar.'
        />

        <QuestionSlider 
            id='l4'
            question='4- Diante de um suicídio penso: se alguém tivesse conversado, a pessoa teria encontrado outro caminho?'
        />

        <QuestionSlider 
            id='l5'
            question='5- No fundo, prefiro não me envolver muito com pacientes que tentaram o suicídio.'
        />

        <QuestionSlider 
            id='l6'
            question='6- A vida é um dom de Deus, e só Ele pode tirar.'
        />

        <QuestionSlider 
            id='l7'
            question='7- Sinto-me capaz de perceber quando um paciente tem risco de se matar.'
        />

        <QuestionSlider 
            id='l8'
            question='8- Geralmente, quem se mata tem alguma doença mental.'
        />

        <QuestionSlider 
            id='l9'
            question='9- Tenho receio de perguntar sobre ideias de suicídio, e acabar induzindo o paciente a isso.'
        />

        <QuestionSlider 
            id='l10'
            question='10- Acho que tenho preparo profissional para lidar com pacientes com risco de suicídio.'
        />

        <QuestionSlider 
            id='l11'
            question='11- Acho que é preciso ser uma pessoa corajosa para se matar.'
        />

        <QuestionSlider 
            id='l12'
            question='12- Sinto-me inseguro(a) para cuidar de pacientes com risco de suicídio.'
        />

        <QuestionSlider 
            id='l13'
            question='13- Às vezes dá raiva, porque tanta gente querendo viver... e aquele paciente querendo morrer.'
        />

        <QuestionSlider 
            id='l14'
            question='14- Se eu sugerir um encaminhamento ao psiquiatra para um paciente que falou em se matar, penso que isso será bem aceito pelo psiquiatra.'
        />

        <QuestionSlider 
            id='l15'
            question='15- A gente se sente impotente diante de uma pessoa que quer se matar.'
        />

        <QuestionSlider 
            id='l16'
            question='16- Quem tem Deus no coração, não vai tentar se matar.'
        />

        <QuestionSlider 
            id='l17'
            question='17- No caso de pacientes que estejam sofrendo muito devido a uma doença física, acho mais aceitável a ideia de suicídio.'
        />

        <QuestionSlider 
            id='l18'
            question='18- Quando uma pessoa fala em pôr fim à vida, tento tirar aquilo da cabeça dela.'
        />

        <QuestionSlider 
            id='l19'
            question='19- Quem quer se matar mesmo, não fica “tentando” se matar.'
        />

        <QuestionSlider 
            id='l20'
            question='20- Um paciente internado dificilmente se mata sem que tenha um forte motivo pra isso.'
        />

        <QuestionSlider 
            id='l21'
            question='21- Eu já passei por situações que me fizeram pensar em suicídio.'
        />

    </form>
  );
}

export default Form2;