const SelectInput = ({ id, label, options, value, onChange, disabled }) => (
  <div className="form-question">
    <label htmlFor={id} className="legend-perguntas">{label}</label>
    <div className="input-container">
      <select
        id={id}
        className="select-input"
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  </div>
);
export default SelectInput;