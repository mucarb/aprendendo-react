import { useState } from 'react';

function Form() {

  // declarando um useState [<nome do atributo>, <função para alterar>] = <chamando usState()>
  const [name, setName] = useState();// useState(<(opcional) valor padrão>)
  const [password, setPassword] = useState();

  function register(e) {
    e.preventDefault(); // previnindo o recarregamento da página ao enviar formulario (e -> evento da DOM)
    console.log(`Usuário ${name} cadastrado, a senha é ${password}`);
  }

  return (
    <div>
      <h1>Meu Formulário:</h1>
      {/* criando evento para envio de formulário */}
      <form onSubmit={register}>
        <div>
          <label htmlFor="name">Nome:</label>
          {/* chamando evento de mudança da variavel para receber o valor, alterando seu state */}
          <input type="text" id="name" name="name" placeholder="Informe um nome!" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" placeholder="Digite uma senha!" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;