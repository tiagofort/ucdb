import React, { useState, useEffect } from 'react';
// Importe seu arquivo CSS personalizado
import '../css/form1.css';
// Importe a imagem do botão salvar (ajuste o caminho)
import saveIcon from '../assets/salvar.png'; // Substitua pelo caminho real
import cidadesPorEstadoData from '../data/cidades.json';
import SelectInput from '../components/SelectInput';
import RadioGroup from '../components/RadioGroup';

// Lista de estados (poderia vir de uma API ou arquivo de configuração)
const estadosBrasileiros = [
    { value: "", label: "Selecione..." },
    { value: "AC", label: "Acre" }, { value: "AL", label: "Alagoas" }, { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" }, { value: "BA", label: "Bahia" }, { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" }, { value: "ES", label: "Espírito Santo" }, { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" }, { value: "MT", label: "Mato Grosso" }, { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" }, { value: "PA", label: "Pará" }, { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" }, { value: "PE", label: "Pernambuco" }, { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" }, { value: "RN", label: "Rio Grande do Norte" }, { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" }, { value: "RR", label: "Roraima" }, { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" }, { value: "SE", label: "Sergipe" }, { value: "TO", label: "Tocantins" }
];




function Form1() {
    // --- Estados para os campos do formulário (mantém igual) ---
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [listaCidades, setListaCidades] = useState([{ value: "", label: "Selecione o estado primeiro" }]);
    const [instituicao, setInstituicao] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('');
    const [religiao, setReligiao] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [experiencia, setExperiencia] = useState('');
    const [cursoSuicidio, setCursoSuicidio] = useState('');
    const [discSuicidio, setDiscSuicidio] = useState('');
    const [estagSuicidio, setEstagSuicidio] = useState('');
    const [contatoSuicidio, setContatoSuicidio] = useState('');
    const [rendaFamiliar, setRendaFamiliar] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

   // --- EFEITO MODIFICADO para usar o JSON importado ---
    useEffect(() => {
        if (estado) {
            const estadoEncontrado = cidadesPorEstadoData.estados.find(est => est.sigla === estado);
            if (estadoEncontrado) {
                // Pega a lista de nomes de cidades do objeto 'estadoEncontrado'
                const nomesCidades = estadoEncontrado.cidades;

                // Mapeia os nomes para o formato { value: nome, label: nome }
                // Adiciona a opção "Selecione..." no início
                const cidadesFormatadas = [
                    { value: "", label: "Selecione..." },
                    ...nomesCidades.map(nomeCidade => ({ value: nomeCidade, label: nomeCidade }))
                ];
                setListaCidades(cidadesFormatadas);
            } else {
                // Se o estado selecionado não for encontrado no JSON
                setListaCidades([{ value: "", label: "Estado inválido" }]);
            }
        } else {
            // Se nenhum estado for selecionado
            setListaCidades([{ value: "", label: "Selecione o estado primeiro" }]);
        }
        // Reseta a cidade selecionada sempre que o estado mudar
        setCidade('');
    }, [estado]); // Executa quando 'estado' mudar

    // --- Handlers (mantém igual: handleInputChange, handleSubmit, closeModal) ---
    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleEstadoChange = (event) => {
        setEstado(event.target.value);
        // A busca de cidades agora é feita pelo useEffect usando o JSON
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validação básica (exemplo)
        if (!estado || !cidade || !instituicao || !idade || !sexo || !estadoCivil || !religiao || !periodo || !experiencia || !cursoSuicidio || !discSuicidio || !estagSuicidio || !contatoSuicidio || !rendaFamiliar) {
            setModalMessage("Por favor, preencha todos os campos obrigatórios.");
            setShowModal(true);
            return;
        }
        const formData = { estado, cidade, instituicao, idade, sexo, estadoCivil, religiao, periodo, experiencia, cursoSuicidio, discSuicidio, estagSuicidio, contatoSuicidio, rendaFamiliar, observacoes };
        console.log("Dados do Formulário:", formData);
        setModalMessage("Dados salvos com sucesso! (Simulação)");
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // --- JSX ---
    return (
        <form onSubmit={handleSubmit} className="form-wrapper"> {/* Usando tag form e wrapper */}
            <h2 className="legenda-prin">
                Primeiro, gostaria de saber seus dados sociodemográficos com o objetivo de caracterizar quem participou desta pesquisa.
            </h2>

            {/* --- Pergunta 1: Estado --- */}
            <SelectInput
                id="inputEstado"
                label="1- Você mora em qual estado?"
                options={estadosBrasileiros}
                value={estado}
                onChange={handleEstadoChange}
            />

            {/* --- Pergunta 2: Cidade --- */}
            <SelectInput
                id="inputCidade"
                label="2- Você mora em qual cidade?"
                options={listaCidades}
                value={cidade}
                onChange={handleInputChange(setCidade)}
                disabled={!estado || listaCidades.length <= 1}
            />

            {/* --- Pergunta 3: Instituição --- */}
            <RadioGroup
                name="rPP"
                label="3- A instituição que você estuda é pública ou privada?"
                className="radio-group radio-group-inline"
                options={[
                    { id: 'rPB', value: 'R_PB', label: 'Pública' },
                    { id: 'rPV', value: 'R_PV', label: 'Privada' }
                ]}
                selectedValue={instituicao}
                onChange={handleInputChange(setInstituicao)}
            />

            {/* --- Pergunta 4: Idade --- */}
            <div className="form-question">
                <label className="legend-perguntas" htmlFor="iIdade">4- Qual a sua idade?</label>
                <div className="input-container">
                    <input
                        type="number"
                        className="text-input" // Similar a form-control
                        id="iIdade"
                        placeholder="Informe sua idade"
                        min="0"
                        value={idade}
                        onChange={handleInputChange(setIdade)}
                        required
                    />
                </div>
            </div>

            {/* --- Pergunta 5: Sexo --- */}
            <RadioGroup
                name="sexo"
                label="5- Sexo:"
                className="radio-group radio-group-inline"
                options={[
                    { id: 'rMasc', value: 'M', label: 'Masculino' },
                    { id: 'rFem', value: 'F', label: 'Feminino' }
                ]}
                selectedValue={sexo}
                onChange={handleInputChange(setSexo)}
            />

            {/* --- Pergunta 6: Estado Civil --- */}         
            <RadioGroup
                name="estCivil"
                label="6- Estado Civil:"
                className="radio-group radio-group-columns"
                options={[
                    { id: 'rCasado', value: 'EC_CA', label: 'Casado(a) ou amasiado(a)' },
                    { id: 'rSolteiro', value: 'EC_S', label: 'Solteiro(a)' },
                    { id: 'rViuvo', value: 'EC_V', label: 'Viúvo(a)' },
                    { id: 'rNamorando', value: 'EC_N', label: 'Namorando' },
                ]}
                selectedValue={estadoCivil}
                onChange={handleInputChange(setEstadoCivil)}
            />

            {/* --- Pergunta 7: Religião --- */}
            <RadioGroup
                name="religiao"
                label="7- Em relação a religião, você se considera:"
                className="radio-group"
                options={[
                    { id: 'rAgnostico', value: 'RL_A', label: 'Agnóstico (Acredita que a questão da existência de divindades ainda não foi decidida, ou não pode ser decidida)' },
                    { id: 'rCristianismo', value: 'RL_C', label: 'Cristianismo (Católico, Evangélico, Protestante, Adventista do sétimo dia)' },
                    { id: 'rEspirita', value: 'RL_E', label: 'Espírita (Candomblé, Umbanda, Budismo)' },
                    { id: 'rAteu', value: 'RL_AT', label: 'Ateu' },
                ]}
                selectedValue={religiao}
                onChange={handleInputChange(setReligiao)}
            />

            {/* --- Pergunta 8: Período --- */}
            <RadioGroup
                name="periodo"
                label="8- Está em que período do curso?"
                className="radio-group radio-group-grid"
                options={[
                    { id: 'r12', value: '12', label: '1º/2º período' },
                    { id: 'r34', value: '34', label: '3º/4º período' },
                    { id: 'r56', value: '56', label: '5º/6º período' },
                    { id: 'r78', value: '78', label: '7º/8º período' },
                    { id: 'r90', value: '90', label: '9º/10º período' },
                    { id: 'r112', value: '112', label: '11º/12º período' },
                ]}
                selectedValue={periodo}
                onChange={handleInputChange(setPeriodo)}
            />

            {/* --- Pergunta 9: Experiência --- */}
            <RadioGroup
                name="experiencia"
                label="9- Qual o seu tempo de experiência em estágios (atendendo pacientes)?"
                className="radio-group"
                options={[
                    { id: 'rNA', value: 'TE_NA', label: 'Ainda não tive essa experiência' },
                    { id: 'r1S', value: 'TE_1S', label: 'Até 1 semestre' },
                    { id: 'r2S', value: 'TE_2S', label: '2 semestres' },
                    { id: 'rM2', value: 'TE_M2S', label: 'Mais de 2 semestres' },
                ]}
                selectedValue={experiencia}
                onChange={handleInputChange(setExperiencia)}
            />

            {/* --- Pergunta 10: Curso Suicídio --- */}
            <RadioGroup
                name="cursoSuicidio"
                label="10- Participou de algum curso (evento externo a sua Universidade) que tratou do tema Suicídio?"
                className="radio-group radio-group-inline"
                options={[
                    { id: 'rSimC', value: 'S', label: 'Sim' },
                    { id: 'rNaoC', value: 'N', label: 'Não' },
                    { id: 'rNRC', value: 'NR', label: 'Não recordo' }
                ]}
                selectedValue={cursoSuicidio}
                onChange={handleInputChange(setCursoSuicidio)}
            />

            {/* --- Pergunta 11: Disciplina Suicídio --- */}
            <RadioGroup
                name="discSuicidio"
                label="11- Participou de alguma disciplina (evento interno na sua Universidade) que tratou do tema Suicídio?"
                className="radio-group radio-group-inline"
                options={[
                    { id: 'rSimD', value: 'S', label: 'Sim' },
                    { id: 'rNaoD', value: 'N', label: 'Não' },
                    { id: 'rNRD', value: 'NR', label: 'Não recordo' }
                ]}
                selectedValue={discSuicidio}
                onChange={handleInputChange(setDiscSuicidio)}
            />

            {/* --- Pergunta 12: Estágio Suicídio --- */}
            <RadioGroup
                name="estagSuicidio"
                label="12- Durante sua atuação nos estágios, você teve contato com pacientes que disseram ter pensado ou tentado se matar?"
                className="radio-group radio-group-inline"
                options={[
                    { id: 'rSimE', value: 'S', label: 'Sim' },
                    { id: 'rNaoE', value: 'N', label: 'Não' },
                    { id: 'rNRE', value: 'NR', label: 'Não recordo' }
                ]}
                selectedValue={estagSuicidio}
                onChange={handleInputChange(setEstagSuicidio)}
            />

            {/* --- Pergunta 13: Contato Suicídio --- */}
            <RadioGroup
                name="suicidio"
                label="13- Você teve contato com outras pessoas, familiares ou amigos, que pensaram e/ou tentaram se matar?"
                className="radio-group"
                options={[
                    { id: 'rSim1', value: 'S1', label: 'Sim. Familiares próximos.' },
                    { id: 'rSim2', value: 'S2', label: 'Sim. Amigos próximos.' },
                    { id: 'rSim3', value: 'S3', label: 'Sim. Mas não eram pessoas próximas.' },
                    { id: 'rNao1', value: 'N1', label: 'Não. Não tive contato com pessoas que pensaram e/ou tentaram se matar.' }
                ]}
                selectedValue={contatoSuicidio}
                onChange={handleInputChange(setContatoSuicidio)}
            />

            {/* --- Pergunta 14: Renda Familiar --- */}
            <RadioGroup
                name="suicidio"
                label="14- Qual a renda mensal da sua família?"
                className="radio-group"
                options={[
                    { id: 'rF1', value: 'f1', label: 'Até 1 salário mínimo (até R$ 1.045,00).' },
                    { id: 'rF2', value: 'f2', label: 'De 1 a 3 salários mínimos (de R$ 1.045,00 até R$ 3.135,00).' },
                    { id: 'rF3', value: 'f3', label: 'De 3 a 6 salários mínimos (de R$ 3.135,00 até R$ 6.270,00).' },
                    { id: 'rF4', value: 'f4', label: 'De 6 a 9 salários mínimos (de R$ 6.270,00 até R$ 9.405,00).' },
                    { id: 'rF5', value: 'f5', label: 'De 9 a 12 salários mínimos (de R$ 9.405,00 até R$ 12.540,00).' },
                    { id: 'rF6', value: 'f6', label: 'De 12 a 15 salários mínimos (de R$ 12.540,00 até R$ 15.675,00).' },
                    { id: 'rF7', value: 'f7', label: 'De 15 a 20 salários mínimos (de R$ 15.675,00 até R$ 20.900,00).' },
                    { id: 'rF8', value: 'f8', label: 'Mais de 20 salários mínimos (mais de R$ 20.900,00).' },
                ]}
                selectedValue={rendaFamiliar}
                onChange={handleInputChange(setRendaFamiliar)}
            />

            {/* --- Pergunta 15: Observações --- */}
            <div className="form-question">
                <label className="legend-perguntas" htmlFor="tObs">15- Deixamos o espaço abaixo para que você descreva o que sentir necessidade sobre a sua experiência com pacientes ou outras pessoas que pensaram e/ou tentaram se matar (RESPOSTA OPCIONAL).</label>
                <div className="input-container">
                    <textarea
                        className="text-input"
                        id="tObs"
                        rows="4"
                        value={observacoes}
                        onChange={handleInputChange(setObservacoes)}
                    ></textarea>
                </div>
            </div>

            {/* --- Botão Salvar --- */}
            <div className="action-button-section">
                <button type="submit" className="submit-button"> {/* Usar classe semântica */}
                    <img className="button-icon" src={saveIcon} alt="" /> {/* Adicionar alt text descritivo se necessário */}
                    Salvar
                </button>
            </div>

            {/* --- Modal/Alerta --- */}
            {/* Renderização condicional do Modal */}
            {showModal && (
                <div className="modal-overlay"> {/* Fundo semi-transparente */}
                    <div className="modal-content"> {/* Conteúdo do Modal */}
                        <p>{modalMessage}</p>
                        <button type="button" className="modal-close-button" onClick={closeModal}>
                            OK {/* Ou Próximo, dependendo da ação */}
                        </button>
                    </div>
                </div>
            )}

        </form> // Fim da tag form
    );
}

export default Form1;