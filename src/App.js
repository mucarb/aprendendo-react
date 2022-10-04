// para instalar a biblioteca do React Router
// via terminal: npm install react-router-dom

import './App.css';

// importando componentes do react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// BrowserRouter (Router): componente responsável por informar a nossa aplicação que teremos um roteamento de componentes, por conta disso ele ficará em volta dos componentes <Route>
// Route: componente que associa a rota ao componente.
// Routes: Um contêiner para uma de elementos aninhado que renderiza a ramificação que melhor corresponde ao caminho/requisição atual.
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>{/* os componentes fora do router não atualização na página se mantendo estaticos */}
        <Route exact path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;