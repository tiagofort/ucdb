
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../css/index.css'; // Use the global CSS

function Form2() {
  return (
    <div className="page-container">
      <div className="centered-div">
        <h2>Formulário 2</h2>
        <p>
          Conteúdo ou campos do Formulário 2 estarão aqui.
          Este é o segundo formulário da aplicação.
        </p>
        {/* Example Link back to Form 1 */}
        <Link to="/form1" style={{ marginTop: '20px', display: 'inline-block' }}>
          Voltar para Formulário 1
        </Link>
      </div>
    </div>
  );
}

export default Form2;