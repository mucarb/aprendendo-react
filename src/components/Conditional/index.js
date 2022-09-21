import { useState } from 'react';

function Conditional() {

  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function sendEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function clearEmail(e) {
    e.preventDefault();
    setUserEmail('');
  }

  return (
    <div>
      <h2>Cadastre seu email</h2>
      <form>
        <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
        <button type='submit' onClick={sendEmail}>Enviar email</button>
        {/* Fazendo estrutura condicional, se o userEmail possuir algum valor (userEmail &&), será renderizado a div */}
        {userEmail && (
          <div>
            <p>O email do usuário é {userEmail}</p>
            <button type='submit' onClick={clearEmail}>Limpar email</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Conditional;