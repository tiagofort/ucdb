import React, { useState, useEffect } from 'react';
// Importe seu arquivo CSS personalizado
import '../src/form1.css';
// Importe a imagem do botão salvar (ajuste o caminho)
import saveIcon from '../src/assets/assinar.png'; // Substitua pelo caminho real
import cidadesPorEstadoData from '../src/cidades.json';

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
            <div className="form-question">
                <label className="legend-perguntas" htmlFor="inputEstado">1- Você mora em qual estado?</label>
                <div className="input-container"> {/* Similar ao input-group */}
                    <select
                        id="inputEstado"
                        className="select-input" // Similar ao custom-select
                        value={estado}
                        onChange={handleEstadoChange}
                        required // Adicionado para validação básica
                    >
                        {estadosBrasileiros.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>

              {/* --- Pergunta 2: Cidade --- */}
            <div className="form-question">
                <label className="legend-perguntas" htmlFor="inputCidade">2- Você mora em qual cidade?</label>
                <div className="input-container">
                    <select
                        id="inputCidade"
                        className="select-input"
                        value={cidade}
                        onChange={handleInputChange(setCidade)} // Handler genérico aqui
                        disabled={!estado || listaCidades.length <= 1}
                        required
                    >
                        {/* A lista de cidades agora é preenchida pelo useEffect com dados do JSON */}
                        {listaCidades.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* --- Pergunta 3: Instituição Pública/Privada --- */}
            <div className="form-question">
                <fieldset> {/* Usar fieldset para agrupar radios */}
                    <legend className="legend-perguntas">3- A instituição que você estuda é pública ou privada?</legend>
                    <div className="radio-group radio-group-inline"> {/* Container para radios */}
                        <div className="radio-option">
                             {/* Input real escondido, label customizado */}
                            <input
                                className="radio-custom-input" // Classe para esconder
                                type="radio"
                                name="rPP"
                                id="rPB"
                                value="R_PB"
                                checked={instituicao === 'R_PB'}
                                onChange={handleInputChange(setInstituicao)}
                                required
                            />
                            <label className="radio-custom-label" htmlFor="rPB">Pública</label>
                        </div>
                        <div className="radio-option">
                            <input
                                className="radio-custom-input"
                                type="radio"
                                name="rPP"
                                id="rPV"
                                value="R_PV"
                                checked={instituicao === 'R_PV'}
                                onChange={handleInputChange(setInstituicao)}
                                required
                            />
                            <label className="radio-custom-label" htmlFor="rPV">Privada</label>
                        </div>
                    </div>
                </fieldset>
            </div>

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
            <div className="form-question">
                 <fieldset>
                    <legend className="legend-perguntas">5- Sexo:</legend>
                    <div className="radio-group radio-group-inline">
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rMasc" name="sexo" value="M" checked={sexo === 'M'} onChange={handleInputChange(setSexo)} required />
                            <label className="radio-custom-label" htmlFor="rMasc">Masculino</label>
                        </div>
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rFem" name="sexo" value="F" checked={sexo === 'F'} onChange={handleInputChange(setSexo)} required />
                            <label className="radio-custom-label" htmlFor="rFem">Feminino</label>
                        </div>
                    </div>
                 </fieldset>
            </div>

             {/* --- Pergunta 6: Estado Civil --- */}
            <div className="form-question">
                 <fieldset>
                    <legend className="legend-perguntas">6- Estado Civil:</legend>
                     {/* Grupo 1 de opções */}
                    <div className="radio-group radio-group-columns"> {/* Ajuste layout se necessário */}
                         <div className="radio-option radio-option-full"> {/* Opção em coluna */}
                            <input className="radio-custom-input" type="radio" id="rCasado" name="estCivil" value="EC_CA" checked={estadoCivil === 'EC_CA'} onChange={handleInputChange(setEstadoCivil)} required />
                            {/* Usar span para quebra de linha controlada se necessário */}
                            <label className="radio-custom-label" htmlFor="rCasado">Casado(a) ou amasiado(a)</label>
                        </div>
                        <div className="radio-option radio-option-full">
                            <input className="radio-custom-input" type="radio" id="rSolteiro" name="estCivil" value="EC_S" checked={estadoCivil === 'EC_S'} onChange={handleInputChange(setEstadoCivil)} required />
                            <label className="radio-custom-label" htmlFor="rSolteiro">Solteiro(a)</label>
                        </div>
                         <div className="radio-option radio-option-full">
                            <input className="radio-custom-input" type="radio" id="rViuvo" name="estCivil" value="EC_V" checked={estadoCivil === 'EC_V'} onChange={handleInputChange(setEstadoCivil)} required />
                            <label className="radio-custom-label" htmlFor="rViuvo">Viúvo(a)</label>
                        </div>
                        <div className="radio-option radio-option-full">
                            <input className="radio-custom-input" type="radio" id="rNamorando" name="estCivil" value="EC_N" checked={estadoCivil === 'EC_N'} onChange={handleInputChange(setEstadoCivil)} required />
                            <label className="radio-custom-label" htmlFor="rNamorando">Namorando</label>
                        </div>
                    </div>
                </fieldset>
            </div>

             {/* --- Pergunta 7: Religião --- */}
            <div className="form-question">
                <fieldset>
                    <legend className="legend-perguntas">7- Em relação a religião, você se considera:</legend>
                    <div className="radio-group"> {/* Sem classe inline, default é coluna */}
                         {/* Note a estrutura: input + label */}
                         <div className="radio-option">
                             <input className="radio-custom-input" type="radio" id="rAgnostico" name="religiao" value="RL_A" checked={religiao === 'RL_A'} onChange={handleInputChange(setReligiao)} required />
                            <label className="radio-custom-label" htmlFor="rAgnostico">Agnóstico (Acredita que a questão da existência de divindades ainda não foi decidida, ou não pode ser decidida)</label>
                        </div>
                         <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rCristianismo" name="religiao" value="RL_C" checked={religiao === 'RL_C'} onChange={handleInputChange(setReligiao)} required />
                            <label className="radio-custom-label" htmlFor="rCristianismo">Cristianismo (Católico, Evangélico, Protestante, Adventista do sétimo dia)</label>
                        </div>
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rEspirita" name="religiao" value="RL_E" checked={religiao === 'RL_E'} onChange={handleInputChange(setReligiao)} required />
                            <label className="radio-custom-label" htmlFor="rEspirita">Espírita (Candomblé, Umbanda, Budismo)</label> {/* Ajuste texto se necessário */}
                        </div>
                         <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rAteu" name="religiao" value="RL_AT" checked={religiao === 'RL_AT'} onChange={handleInputChange(setReligiao)} required />
                            <label className="radio-custom-label" htmlFor="rAteu">Ateu</label>
                        </div>
                    </div>
                </fieldset>
            </div>

            {/* --- Pergunta 8: Período --- */}
            <div className="form-question">
                 <fieldset>
                    <legend className="legend-perguntas">8- Está em que período do curso?</legend>
                    <div className="radio-group radio-group-grid"> {/* Exemplo usando grid para 3 colunas */}
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="r12" name="periodo" value="12" checked={periodo === '12'} onChange={handleInputChange(setPeriodo)} required/>
                            <label className="radio-custom-label" htmlFor="r12">1º/2º período</label>
                        </div>
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="r34" name="periodo" value="34" checked={periodo === '34'} onChange={handleInputChange(setPeriodo)} required/>
                            <label className="radio-custom-label" htmlFor="r34">3º/4º período</label>
                        </div>
                         <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="r56" name="periodo" value="56" checked={periodo === '56'} onChange={handleInputChange(setPeriodo)} required/>
                            <label className="radio-custom-label" htmlFor="r56">5º/6º período</label>
                        </div>
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="r78" name="periodo" value="78" checked={periodo === '78'} onChange={handleInputChange(setPeriodo)} required/>
                            <label className="radio-custom-label" htmlFor="r78">7º/8º período</label>
                        </div>
                         <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="r90" name="periodo" value="90" checked={periodo === '90'} onChange={handleInputChange(setPeriodo)} required/>
                            <label className="radio-custom-label" htmlFor="r90">9º/10º período</label>
                        </div>
                         <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="r112" name="periodo" value="112" checked={periodo === '112'} onChange={handleInputChange(setPeriodo)} required/>
                            <label className="radio-custom-label" htmlFor="r112">11º/12º período</label>
                        </div>
                    </div>
                 </fieldset>
            </div>

            {/* --- Pergunta 9: Experiência --- */}
             <div className="form-question">
                 <fieldset>
                    <legend className="legend-perguntas">9- Qual o seu tempo de experiência em estágios (atendendo pacientes)?</legend>
                     <div className="radio-group">
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rNA" name="experiencia" value="TE_NA" checked={experiencia === 'TE_NA'} onChange={handleInputChange(setExperiencia)} required/>
                            <label className="radio-custom-label" htmlFor="rNA">Ainda não tive essa experiência</label>
                         </div>
                         <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="r1S" name="experiencia" value="TE_1S" checked={experiencia === 'TE_1S'} onChange={handleInputChange(setExperiencia)} required/>
                            <label className="radio-custom-label" htmlFor="r1S">Até 1 semestre</label>
                        </div>
                         <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="r2S" name="experiencia" value="TE_2S" checked={experiencia === 'TE_2S'} onChange={handleInputChange(setExperiencia)} required/>
                            <label className="radio-custom-label" htmlFor="r2S">2 semestres</label>
                         </div>
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rM2" name="experiencia" value="TE_M2S" checked={experiencia === 'TE_M2S'} onChange={handleInputChange(setExperiencia)} required/>
                            <label className="radio-custom-label" htmlFor="rM2">Mais de 2 semestres</label>
                        </div>
                     </div>
                 </fieldset>
             </div>

            {/* --- Pergunta 10: Curso Suicídio --- */}
            <div className="form-question">
                <fieldset>
                    <legend className="legend-perguntas">10- Participou de algum curso (evento externo a sua Universidade) que tratou do tema Suicídio?</legend>
                    <div className="radio-group radio-group-inline">
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rSimC" name="cursoSuicidio" value="S" checked={cursoSuicidio === 'S'} onChange={handleInputChange(setCursoSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rSimC">Sim</label>
                        </div>
                         <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rNaoC" name="cursoSuicidio" value="N" checked={cursoSuicidio === 'N'} onChange={handleInputChange(setCursoSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rNaoC">Não</label>
                         </div>
                         <div className="radio-option">
                             <input className="radio-custom-input" type="radio" id="rNRC" name="cursoSuicidio" value="NR" checked={cursoSuicidio === 'NR'} onChange={handleInputChange(setCursoSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rNRC">Não recordo</label>
                         </div>
                    </div>
                </fieldset>
            </div>

             {/* --- Pergunta 11: Disciplina Suicídio --- */}
            <div className="form-question">
                 <fieldset>
                    <legend className="legend-perguntas">11- Participou de alguma disciplina (evento interno na sua Universidade) que tratou do tema Suicídio?</legend>
                    <div className="radio-group radio-group-inline">
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rSimD" name="discSuicidio" value="S" checked={discSuicidio === 'S'} onChange={handleInputChange(setDiscSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rSimD">Sim</label>
                        </div>
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rNaoD" name="discSuicidio" value="N" checked={discSuicidio === 'N'} onChange={handleInputChange(setDiscSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rNaoD">Não</label>
                         </div>
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rNRD" name="discSuicidio" value="NR" checked={discSuicidio === 'NR'} onChange={handleInputChange(setDiscSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rNRD">Não recordo</label>
                         </div>
                    </div>
                 </fieldset>
            </div>

             {/* --- Pergunta 12: Estágio Suicídio --- */}
             <div className="form-question">
                 <fieldset>
                    <legend className="legend-perguntas">12- Durante sua atuação nos estágios, você teve contato com pacientes que disseram ter pensado ou tentado se matar?</legend>
                    <div className="radio-group radio-group-inline">
                         <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rSimE" name="estagSuicidio" value="S" checked={estagSuicidio === 'S'} onChange={handleInputChange(setEstagSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rSimE">Sim</label>
                         </div>
                         <div className="radio-option">
                             <input className="radio-custom-input" type="radio" id="rNaoE" name="estagSuicidio" value="N" checked={estagSuicidio === 'N'} onChange={handleInputChange(setEstagSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rNaoE">Não</label>
                        </div>
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rNRE" name="estagSuicidio" value="NR" checked={estagSuicidio === 'NR'} onChange={handleInputChange(setEstagSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rNRE">Não recordo</label>
                         </div>
                    </div>
                </fieldset>
             </div>

             {/* --- Pergunta 13: Contato Suicídio --- */}
             <div className="form-question">
                 <fieldset>
                    <legend className="legend-perguntas">13- Você teve contato com outras pessoas, familiares ou amigos, que pensaram e/ou tentaram se matar?</legend>
                     <div className="radio-group">
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rSim1" name="suicidio" value="S1" checked={contatoSuicidio === 'S1'} onChange={handleInputChange(setContatoSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rSim1">Sim. Familiares próximos.</label>
                        </div>
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rSim2" name="suicidio" value="S2" checked={contatoSuicidio === 'S2'} onChange={handleInputChange(setContatoSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rSim2">Sim. Amigos próximos.</label>
                        </div>
                         <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rSim3" name="suicidio" value="S3" checked={contatoSuicidio === 'S3'} onChange={handleInputChange(setContatoSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rSim3">Sim. Mas não eram pessoas próximas.</label>
                         </div>
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rNao1" name="suicidio" value="N1" checked={contatoSuicidio === 'N1'} onChange={handleInputChange(setContatoSuicidio)} required/>
                            <label className="radio-custom-label" htmlFor="rNao1">Não. Não tive contato com pessoas que pensaram e/ou tentaram se matar.</label>
                        </div>
                     </div>
                </fieldset>
            </div>

            {/* --- Pergunta 14: Renda Familiar --- */}
            <div className="form-question">
                <fieldset>
                    <legend className="legend-perguntas">14- Qual a renda mensal da sua família?</legend>
                     <div className="radio-group">
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rF1" name="salario" value="f1" checked={rendaFamiliar === 'f1'} onChange={handleInputChange(setRendaFamiliar)} required/>
                            <label className="radio-custom-label" htmlFor="rF1">Até 1 salário mínimo (até R$ 1.045,00).</label> {/* Ajustar valor se necessário */}
                        </div>
                        <div className="radio-option">
                             <input className="radio-custom-input" type="radio" id="rF2" name="salario" value="f2" checked={rendaFamiliar === 'f2'} onChange={handleInputChange(setRendaFamiliar)} required/>
                            <label className="radio-custom-label" htmlFor="rF2">De 1 a 3 salários mínimos (de R$ 1.045,00 até R$ 3.135,00).</label>
                        </div>
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rF3" name="salario" value="f3" checked={rendaFamiliar === 'f3'} onChange={handleInputChange(setRendaFamiliar)} required/>
                            <label className="radio-custom-label" htmlFor="rF3">De 3 a 6 salários mínimos (de R$ 3.135,00 até R$ 6.270,00).</label>
                        </div>
                         <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rF4" name="salario" value="f4" checked={rendaFamiliar === 'f4'} onChange={handleInputChange(setRendaFamiliar)} required/>
                            <label className="radio-custom-label" htmlFor="rF4">De 6 a 9 salários mínimos (de R$ 6.270,00 até R$ 9.405,00).</label>
                        </div>
                        <div className="radio-option">
                             <input className="radio-custom-input" type="radio" id="rF5" name="salario" value="f5" checked={rendaFamiliar === 'f5'} onChange={handleInputChange(setRendaFamiliar)} required/>
                            <label className="radio-custom-label" htmlFor="rF5">De 9 a 12 salários mínimos (de R$ 9.405,00 até R$ 12.540,00).</label>
                        </div>
                        <div className="radio-option">
                             <input className="radio-custom-input" type="radio" id="rF6" name="salario" value="f6" checked={rendaFamiliar === 'f6'} onChange={handleInputChange(setRendaFamiliar)} required/>
                            <label className="radio-custom-label" htmlFor="rF6">De 12 a 15 salários mínimos (de R$ 12.540,00 até R$ 15.675,00).</label>
                        </div>
                        <div className="radio-option">
                            <input className="radio-custom-input" type="radio" id="rF7" name="salario" value="f7" checked={rendaFamiliar === 'f7'} onChange={handleInputChange(setRendaFamiliar)} required/>
                             <label className="radio-custom-label" htmlFor="rF7">De 15 a 20 salários mínimos (de R$ 15.675,00 até R$ 20.900,00).</label>
                        </div>
                        <div className="radio-option">
                             <input className="radio-custom-input" type="radio" id="rF8" name="salario" value="f8" checked={rendaFamiliar === 'f8'} onChange={handleInputChange(setRendaFamiliar)} required/>
                            <label className="radio-custom-label" htmlFor="rF8">Mais de 20 salários mínimos (mais de R$ 20.900,00).</label>
                         </div>
                     </div>
                 </fieldset>
             </div>

            {/* --- Pergunta 15: Observações --- */}
            <div className="form-question">
                <label className="legend-perguntas" htmlFor="tObs">15- Deixamos o espaço abaixo para que você descreva o que sentir necessidade sobre a sua experiência com pacientes ou outras pessoas que pensaram e/ou tentaram se matar (RESPOSTA OPCIONAL).</label>
                <div className="input-container">
                    <textarea
                        className="text-input" // Similar a form-control
                        id="tObs"
                        rows="4" // Aumentado para mais espaço
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