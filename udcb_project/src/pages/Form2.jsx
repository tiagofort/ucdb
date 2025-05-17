
import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';
import '../css/form2.css';
import QuestionSlider from '../components/QuestionSlider';
import ConfirmationModal from '../components/ConfirmationModal.jsx';
import questions from '../data/form2.js';


function Form2() {
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

        const savedAnswers = JSON.parse(localStorage.getItem("formAnswers")) || [];
        savedAnswers[pendingIndex] = answers[pendingIndex];
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

    return (
        <form className="form-wrapper">
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

            <button type="button" id="btSalvar" className="btn btn-lg btn-block">
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