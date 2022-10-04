// instalando a bibliotecas de icones
// npm install react-icons
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import './styles.css'

function Footer() {
  return (
    <footer>
      <ul className='social-list'>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedin /></li>
      </ul>
      <p>Rodapé</p>
    </footer>
  );
}

export default Footer;