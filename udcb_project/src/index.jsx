// src/IndexPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; // Import your custom CSS file for this component
import signIcon from '../src/assets/assinar.png'; // Adjust path as needed


function Index() {
  const navigate = useNavigate();

  const handleConsentClick = () => {
    navigate('/form1'); // Navigate to form1 page
    alert("Terms agreed. Starting the questionnaire...");
  };

   // Todo o conteúdo está dentro desta div principal
  return (
    <div className="consent-form-wrapper">

      {/* Você pode manter esta div interna se ela ainda tiver estilos próprios,
          ou remover e aplicar os estilos diretamente ao conteúdo se preferir */}
      <div className="consent-details-content">
        <h2 className="legenda-prin">
          CONHECIMENTOS E ATITUDES DE ESTUDANTES DE MEDICINA A RESPEITO DO SUICÍDIO
        </h2>
        <p className="p-principal">
          <b>1. TÍTULO DO PROJETO DE PESQUISA:</b> CONHECIMENTOS E ATITUDES DE ESTUDANTES DE MEDICINA A RESPEITO DO SUICÍDIO (avaliação em sistema online).
        </p>
        <p className="p-principal">
          <b>2. INFORMAÇÕES SOBRE O CEP:</b><br />
          O CEP é a instância na qual o participante da pesquisa pode receber informações e protocolar queixas em relação aos procedimentos aos quais foi submetido durante a pesquisa, quando por estes se sentir lesado.<br />
          Nome: CEP UCDB<br />
          Endereço: Av. Tamandaré, 6000, Jardim Seminário – CEP: 79117-900 – Campo Grande-MS<br />
          Telefone: (67) 3312-3478<br />
          Email: cep@ucdb.br
        </p>
        <p className="p-principal">
          <b>3. OBJETIVOS DA PESQUISA:</b><br />
          Este estudo visa conhecer como alunos de medicina percebem a temática do suicídio.
        </p>
        <p className="p-principal">
          <b>4. JUSTIFICATIVA DA PESQUISA:</b><br />
          Este estudo pode contribuir com o desenvolvimento de intervenções futuras dirigidas a profissionais de saúde, sobretudo estudantes de medicina e médicos, no que diz respeito ao tema prevenção ao suicídio.
        </p>
        <p className="p-principal">
          <b>5. PROCEDIMENTOS METODOLÓGICOS:</b><br />
          Sua participação nesta pesquisa consistirá no preenchimento de um questionário sociodemográfico, e do QUACS; um questionário que investiga a percepção sobre o suicídio e para lidar com pacientes em ideação suicida. O tempo para responder a esta pesquisa é de aproximadamente 5 minutos. Você poderá receber a devolutiva desta pesquisa (se quiser), e para isso você deverá inserir seu contato (e-mail) ao final do questionário.
        </p>
        <p className="p-principal">
          <b>6. POSSÍVEIS DESCONFORTOS E RISCOS E A FORMA COMO SERÃO ATENDIDOS OU ENCAMINHADOS:</b><br />
          Os riscos ao participar desta pesquisa poderão ser você sentir-se constrangido para responder as perguntas no que se refere ao tema suicídio. Se isso ocorrer, você poderá encerrar a sua participação imediatamente sem qualquer ônus a você ou a instituição na qual você estuda.<br />
          Como benefícios, esta pesquisa trará maior conhecimento sobre o tema abordado, auxiliando no desenvolvimento de intervenções futuras que visem orientar/preparar profissionais de saúde para a interação com pacientes em ideação suicida.
        </p>
        <p className="p-principal">
          <b>7. FORMA DE DEVOLUTIVA DOS RESULTADOS AOS PARTICIPANTES:</b><br />
          Você poderá receber uma devolutiva, por escrito, dos dados coletados neste estudo, se desejar. Para isso, deverá informar o seu contato de e-mail ao final deste formulário.<br />
          <br />
          Considerando as informações constantes dos itens acima e as normas expressas na Resolução nº 466/2012 do <b>Conselho Nacional de Saúde/Ministério da Saúde</b>, consinto, de modo livre e esclarecido, participar da presente pesquisa na condição de participante da pesquisa e/ou responsável por participante da pesquisa, sabendo que:<br />
          <b>1.</b> A participação em todos os momentos e fases da pesquisa é voluntária e não implica quaisquer tipos de despesa e/ou ressarcimento financeiro. Em havendo despesas operacionais, estas deverão estar previstas no Cronograma de Desembolso Financeiro e em nenhuma hipótese poderão recair sobre o participante da pesquisa e/ou seu responsável;<br />
          <b>2.</b> A liberdade de retirada do consentimento e da participação no respectivo estudo é garantida a qualquer momento, sem qualquer prejuízo, punição ou atitude preconceituosa;<br />
          <b>3.</b> O anonimato é garantido;<br />
          <b>4.</b> Os dados coletados só serão utilizados para a pesquisa e os resultados poderão ser veiculados em livros, ensaios e/ou artigos científicos em revistas especializadas e/ou em eventos científicos;<br />
          <b>5.</b> A pesquisa aqui proposta foi aprovada pelo <b>Comitê de Ética em Pesquisa (CEP), da Universidade Católica Dom Bosco (UCDB)</b>, que a referenda; e<br />
          <b>6.</b> O presente termo está assinado em duas vias.
        </p>
      </div> {/* Fim de consent-details-content */}


      <div className="researcher-section">
        <div className="researcher-info">
          <b>Pesquisadores Responsáveis</b><br />
          Profa. Luziane de Fátima Kirchner<br />
          Programa de Pós-Graduação em Psicologia<br />
          Universidade Católica Dom Bosco – Campo Grande - MS<br />
          Contato: (67) 98190-2100<br />
          <b className="contact-email">luzianefk@gmail.com</b><br />
          <br />
          <b className="section-subtitle">Discentes - UCDB</b><br />
          Letícia Herrera<br />
          Mariana Sartoratto<br />
          <br />
          <b className="section-subtitle">Professor Colaborador</b><br />
          Profa. Josiane Knaut<br />
          Universidade Positivo - Curitiba - PR<br />
          <b className="contact-email">josiane.knaut@up.edu.br</b>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-content">
          <b className="p-principal terms-heading">Termos</b><br />
          <p className="p-principal">
            Concordo em participar do presente estudo respondendo aos questionários, e declaro que fui devidamente informado e esclarecido sobre a pesquisa e os procedimentos nela envolvidos, bem como os seus riscos e benefícios. Autorizo a publicação dos resultados da pesquisa, a qual garante o anonimato e o sigilo referente à minha participação.
          </p>
        </div>
      </div>

      <div className="action-button-section">
        <button
          type="button"
          className="consent-button"
          onClick={handleConsentClick}
        >
          <img className="consent-button-icon" src={signIcon} alt="Ícone de concordar" />
          Concordar com os termos e começar
        </button>
      </div>

    </div> // Fim de consent-form-wrapper
  );
}

export default Index;