import { useState, useEffect } from 'react';
import '../css/form1.css';
import { useNavigate } from 'react-router-dom';
import saveIcon from '../assets/salvar.png';
import ucdb from '../assets/UCDB.jpg';
import cidadesPorEstadoData from '../data/cidades';
import estadosBrasileiros from '../data/estados';
import SelectInput from '../components/SelectInput';
import RadioGroup from '../components/RadioGroup';

function Form1() {

    const navigate = useNavigate();
    const [state, setEstado] = useState('');
    const [city, setCidade] = useState('');
    const [listaCidades, setListaCidades] = useState([{ value: "", label: "Selecione o estado primeiro" }]);
    const [institutionType, setInstituicao] = useState('');
    const [age, setIdade] = useState('');
    const [gender, setSexo] = useState('');
    const [marital_status, setEstadoCivil] = useState('');
    const [religion, setReligiao] = useState('');
    const [semester, setPeriodo] = useState('');
    const [experience_time, setExperiencia] = useState('');
    const [suicideCourse, setCursoSuicidio] = useState('');
    const [suicideDiscipline, setDiscSuicidio] = useState('');
    const [suicideInternship, setEstagSuicidio] = useState('');
    const [suicide, setContatoSuicidio] = useState('');
    const [salaryAverage, setRendaFamiliar] = useState('');
    const [obs, setObservacoes] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 50);
    }, []);

    useEffect(() => {
        const termosAceitos = localStorage.getItem('confirmterms');
    
        if (termosAceitos !== 'true') {
          navigate('/');
        }
    }, [navigate]);

    useEffect(() => {
        if (state) {
            const estadoEncontrado = cidadesPorEstadoData.estados.find(est => est.sigla === state);
            if (estadoEncontrado) {
                const nomesCidades = estadoEncontrado.cidades;
                const cidadesFormatadas = [
                    { value: "", label: "Selecione..." },
                    ...nomesCidades.map(nomeCidade => ({ value: nomeCidade, label: nomeCidade }))
                ];
                setListaCidades(cidadesFormatadas);
            } else {
                setListaCidades([{ value: "", label: "Estado inválido" }]);
            }
        } else {
            setListaCidades([{ value: "", label: "Selecione o estado primeiro" }]);
        }
        setCidade('');
    }, [state]);

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleEstadoChange = (event) => {
        setEstado(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!state || !city || !institutionType || !age || !gender || !marital_status || !religion || !semester || !experience_time || !suicideCourse || !suicideDiscipline || !suicideInternship || !suicide || !salaryAverage) {
            setModalMessage("Por favor, preencha todos os campos obrigatórios.");
            setShowModal(true);
            return;
        }
        const formData = { state, city, institutionType, age, gender, marital_status, religion, semester, experience_time, suicideCourse, suicideDiscipline, suicideInternship, suicide, salaryAverage, obs };
        localStorage.setItem("form1", JSON.stringify(formData));
        setModalMessage("Dados salvos com sucesso! (Simulação)");
        setShowModal(true);
        navigate('/form2Instruction');
    };

    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <form onSubmit={handleSubmit} className="form-wrapper"> 
            
            <img src={ucdb} alt="Marca d'água" className="water-mark"></img>

            <h2 className="legenda-prin">
                Primeiro, gostaria de saber seus dados sociodemográficos com o objetivo de caracterizar quem participou desta pesquisa.
            </h2>

            <SelectInput
                id="inputEstado"
                label="1- Você mora em qual estado?"
                options={estadosBrasileiros}
                value={state}
                onChange={handleEstadoChange}
            />

          
            <SelectInput
                id="inputCidade"
                label="2- Você mora em qual cidade?"
                options={listaCidades}
                value={city}
                onChange={handleInputChange(setCidade)}
                disabled={!state || listaCidades.length <= 1}
            />


            <RadioGroup
                name="rPP"
                label="3- A instituição que você estuda é pública ou privada?"
                className="radio-group radio-group-inline"
                options={[
                    { id: 'rPB', value: 'R_PB', label: 'Pública' },
                    { id: 'rPV', value: 'R_PV', label: 'Privada' }
                ]}
                selectedValue={institutionType}
                onChange={handleInputChange(setInstituicao)}
            />

          
            <div className="form-question">
                <label className="legend-perguntas" htmlFor="iIdade">4- Qual a sua idade?</label>
                <div className="input-container">
                    <input
                        type="number"
                        className="text-input"
                        id="iIdade"
                        placeholder="Informe sua idade"
                        min="0"
                        value={age}
                        onChange={handleInputChange(setIdade)}
                        required
                    />
                </div>
            </div>


            <RadioGroup
                name="sexo"
                label="5- Sexo:"
                className="radio-group radio-group-inline"
                options={[
                    { id: 'rMasc', value: 'M', label: 'Masculino' },
                    { id: 'rFem', value: 'F', label: 'Feminino' }
                ]}
                selectedValue={gender}
                onChange={handleInputChange(setSexo)}
            />

                 
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
                selectedValue={marital_status}
                onChange={handleInputChange(setEstadoCivil)}
            />

            
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
                selectedValue={religion}
                onChange={handleInputChange(setReligiao)}
            />

           
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
                selectedValue={semester}
                onChange={handleInputChange(setPeriodo)}
            />

            
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
                selectedValue={experience_time}
                onChange={handleInputChange(setExperiencia)}
            />

          
            <RadioGroup
                name="cursoSuicidio"
                label="10- Participou de algum curso (evento externo a sua Universidade) que tratou do tema Suicídio?"
                className="radio-group radio-group-inline"
                options={[
                    { id: 'rSimC', value: 'S', label: 'Sim' },
                    { id: 'rNaoC', value: 'N', label: 'Não' },
                    { id: 'rNRC', value: 'NR', label: 'Não recordo' }
                ]}
                selectedValue={suicideCourse}
                onChange={handleInputChange(setCursoSuicidio)}
            />

            
            <RadioGroup
                name="discSuicidio"
                label="11- Participou de alguma disciplina (evento interno na sua Universidade) que tratou do tema Suicídio?"
                className="radio-group radio-group-inline"
                options={[
                    { id: 'rSimD', value: 'S', label: 'Sim' },
                    { id: 'rNaoD', value: 'N', label: 'Não' },
                    { id: 'rNRD', value: 'NR', label: 'Não recordo' }
                ]}
                selectedValue={suicideDiscipline}
                onChange={handleInputChange(setDiscSuicidio)}
            />

            
            <RadioGroup
                name="estagSuicidio"
                label="12- Durante sua atuação nos estágios, você teve contato com pacientes que disseram ter pensado ou tentado se matar?"
                className="radio-group radio-group-inline"
                options={[
                    { id: 'rSimE', value: 'S', label: 'Sim' },
                    { id: 'rNaoE', value: 'N', label: 'Não' },
                    { id: 'rNRE', value: 'NR', label: 'Não recordo' }
                ]}
                selectedValue={suicideInternship}
                onChange={handleInputChange(setEstagSuicidio)}
            />

            
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
                selectedValue={suicide}
                onChange={handleInputChange(setContatoSuicidio)}
            />

            
            <RadioGroup
                name="rendaFamiliar"
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
                selectedValue={salaryAverage}
                onChange={handleInputChange(setRendaFamiliar)}
            />

            
            <div className="form-question">
                <label className="legend-perguntas" htmlFor="tObs">15- Deixamos o espaço abaixo para que você descreva o que sentir necessidade sobre a sua experiência com pacientes ou outras pessoas que pensaram e/ou tentaram se matar (RESPOSTA OPCIONAL).</label>
                <div className="input-container">
                    <textarea
                        className="text-input"
                        id="tObs"
                        rows="4"
                        value={obs}
                        onChange={handleInputChange(setObservacoes)}
                    ></textarea>
                </div>
            </div>


            <div className="action-button-section">
                <button type="submit" className="submit-button"> 
                    <img className="button-icon" src={saveIcon} alt="" />
                    Salvar
                </button>
            </div>

            
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <p>{modalMessage}</p>
                        <button type="button" className="modal-close-button" onClick={closeModal}>
                            OK 
                        </button>
                    </div>
                </div>
            )}

        </form>
    );
}

export default Form1;