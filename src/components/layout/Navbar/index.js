import { Link } from "react-router-dom";
// Link: é um elemento que permite ao usuário navegar para outra página clicando ou tocando nela. Em react-router-dom, um <Link> renderiza um elemento <a> acessível com um href real que aponta para o recurso ao qual está vinculando.

import './styles.css'

function Navbar() {
  return (
    <ul className="list">
      <li className="item">
        <Link to="/">Home</Link>
      </li>
      <li className="item">
        <Link to="/company">Empresa</Link>
      </li>
      <li className="item">
        <Link to="/contact">Contato</Link>
      </li>
    </ul>
  )
}

export default Navbar;