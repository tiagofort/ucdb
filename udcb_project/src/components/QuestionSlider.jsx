const QuestionSlider = ({ id, question }) => (
    <div className="question-block">
      <div className="question-title">
        <strong>{question}</strong>
      </div>
      <div className="slider-container">
        <div className="label left">Discordo<br/>Totalmente</div>
        <input id={id} type="range" className="slider" min="0" max="100" defaultValue={50} />
        <div className="label right">Concordo<br/>Plenamente</div>
      </div>
    </div>
);

export default QuestionSlider;
