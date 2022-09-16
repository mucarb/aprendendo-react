function Form() {

  function register(e) {
    e.preventDefault(); // previnindo o recarregamento da página ao enviar formulario (e -> evento da DOM)
    console.log('Novo registro executado!');
  }

  return (
    <div>
      <h1>Meu Formulário:</h1>
      {/* criando evento para envio de formulário */}
      <form onSubmit={register}>
        <div>
          <input type="text" placeholder="Digite alguma coisa!" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;