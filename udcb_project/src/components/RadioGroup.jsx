const RadioGroup = ({ name, label, options, selectedValue, onChange, className }) => (
  <div className="form-question">
    <fieldset>
      <legend className="legend-perguntas">{label}</legend>
      <div className={className}>
        {options.map(({ id, value, label }) => (
          <div className="radio-option" key={id}>
            <input
              className="radio-custom-input"
              type="radio"
              name={name}
              id={id}
              value={value}
              checked={selectedValue === value}
              onChange={onChange}
              required
            />
            <label className="radio-custom-label" htmlFor={id}>{label}</label>
          </div>
        ))}
      </div>
    </fieldset>
  </div>
);
export default RadioGroup;