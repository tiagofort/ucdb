import React, { useState, useEffect } from 'react';

const QuestionSlider = ({
  id,
  question,
  enabled,
  answered,
  isCurrent,
  value,
  onChange,
  onFinalChange
}) => {
  const [localValue, setLocalValue] = useState(value ?? 50);

  useEffect(() => {
    if (value !== null && value !== localValue) {
      setLocalValue(value);
    }
  }, [value]);

  const handleSliderChange = (e) => {
    const newValue = Number(e.target.value);
    setLocalValue(newValue);
    onChange?.(newValue);
  };

  const handleFinalInteraction = () => {
    if (!answered) {
      onFinalChange();
    }
  };

  const titleColor = isCurrent ? 'yellow' : answered ? 'white' : 'white';
  const blockOpacity = answered ? 0.5 : 1;

  return (
    <div className="question-block" style={{ opacity: blockOpacity }}>
      <div className="question-title" style={{ color: titleColor }}>
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
          value={localValue}
          disabled={!enabled}
          onChange={handleSliderChange}
          onMouseUp={handleFinalInteraction}
          onTouchEnd={handleFinalInteraction}
        />
        <div className="label right">Concordo<br />Plenamente</div>
      </div>
    </div>
  );
};

export default QuestionSlider;
