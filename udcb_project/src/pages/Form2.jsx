
import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/index.css';
import '../css/form2.css';
import QuestionSlider from '../components/QuestionSlider';
import ConfirmationModal from '../components/ConfirmationModal.jsx';
import questions from '../data/form2.js';


function Form2() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answered, setAnswered] = useState(Array(questions.length).fill(false));
    const [showModal, setShowModal] = useState(false);
    const [pendingIndex, setPendingIndex] = useState(null);
    const [answers, setAnswers] = useState(Array(questions.length).fill(50));

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
    }, []);

    const handleAnswerChange = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };

    const handleFinalChange = (index) => {
        setPendingIndex(index);
        setShowModal(true);
    };

    const handleConfirm = () => {
        const updatedAnswered = [...answered];
        updatedAnswered[pendingIndex] = true;
        setAnswered(updatedAnswered);

        const savedAnswers = JSON.parse(localStorage.getItem("formAnswers")) || {};

        savedAnswers[`answer_${pendingIndex + 1}`] = answers[pendingIndex];

        localStorage.setItem("formAnswers", JSON.stringify(savedAnswers));

        if (pendingIndex + 1 < questions.length) {
            setCurrentIndex(pendingIndex + 1);
        }

        setShowModal(false);
        setPendingIndex(null);
    };

    const handleCancel = () => {
        setShowModal(false);
        setPendingIndex(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const research = JSON.parse(localStorage.getItem('formAnswers'));
        const socio = JSON.parse(localStorage.getItem('form1'));
        const union = {
            research,
            socio
        };
        fetch('http://localhost:3000/dataResearch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(union)
            })
            .then(res => res.json())
            .then(data => console.log('Resposta do servidor:', data))
            .catch(err => console.error('Erro ao enviar:', err));
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit} className="form-wrapper">
            <h2 className="legenda-prin">
                Primeiro, gostaria de saber seus dados sociodemográficos com o objetivo de caracterizar quem participou desta pesquisa.
            </h2>

            <div>
                {questions.map((question, index) => (
                    <QuestionSlider
                        key={`q${index + 1}`}
                        id={`q${index + 1}`}
                        question={question}
                        enabled={index === currentIndex}
                        isCurrent={index === currentIndex}
                        answered={answered[index]}
                        value={answers[index]}
                        onChange={(value) => handleAnswerChange(index, value)}
                        onFinalChange={() => handleFinalChange(index)}
                    />
                ))}
            </div>

            <button type="submit" id="btSalvar" className="btn btn-lg btn-block">
                Concluir
            </button>

            <ConfirmationModal 
                visible={showModal} 
                onConfirm={handleConfirm} 
                onCancel={handleCancel} 
            />
        </form>
    );
}

export default Form2;