
import React, { useState } from 'react';
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

    const handleFinalChange = (index) => {
        setPendingIndex(index);
        setShowModal(true);
    };

    const handleConfirm = () => {
        const updated = [...answered];
        updated[pendingIndex] = true;
        setAnswered(updated);

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
            {questions.map((q, index) => (
            <QuestionSlider
                key={`l${index + 1}`}
                id={`l${index + 1}`}
                question={q}
                enabled={index === currentIndex}
                isCurrent={index === currentIndex}
                answered={answered[index]}
                onFinalChange={() => handleFinalChange(index)}
            />
            ))}
        </div>

        <ConfirmationModal 
            visible={showModal} 
            onConfirm={handleConfirm} 
            onCancel={handleCancel} 
        />

    </form>
  );
}

export default Form2;