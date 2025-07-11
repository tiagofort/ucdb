// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './index';
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';
import Form2Instruction from './pages/Form2Instruction';
import End from './pages/End'

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Index />} />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form2Instruction" element={<Form2Instruction />} />
        <Route path="/end" element={<End />} />

        <Route path="*" element={
          <div className="page-container">
            <div className="centered-div">
              <h2>404 - Página Não Encontrada</h2>
              <p>Desculpe, a página que você procura não existe.</p>
              <Link to="/">Voltar à página inicial</Link>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;