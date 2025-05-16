const QuestionSlider = ({id, question, enabled, answered, isCurrent, onFinalChange}) => {
  
  const handleFinalChange = (e) => {
    if (!answered) {
      onFinalChange();
    }
  };

  const titleColor = isCurrent ? 'yellow' : answered ? 'white' : 'white';
  const blockOpacity = answered ? 0.5 : 1;

  return (
    <div className="question-block" style={{ opacity: blockOpacity }}>
      <div
        className="question-title"
        style={{ color: titleColor }}
      >
        <strong>{question}</strong>
      </div>
      <div className="slider-container">
        <div className="label left">Discordo<br />Totalmente</div>
        <input
          id={id}
          type="range"
          className="slider"
          min="0"
          max="100"
          defaultValue={50}
          disabled={!enabled}
          onMouseUp={handleFinalChange}
          onTouchEnd={handleFinalChange}
        />
        <div className="label right">Concordo<br />Plenamente</div>
      </div>
    </div>
  );
};

export default QuestionSlider;
