import './App.css';

function App() {

  const name = 'Murilo';

  const url = 'https://via.placeholder.com/150'

  function sum(a, b) {
    return a + b
  }

  /* função que renderiza o HTML */
  return (
    /* no jsx utiliza a palavra 'className' pra referenciar um arquivo de estilo, a palavra 'class' que é usada em marcações HTML, não é utilizada aqui por ser uma palavra reservada do React */
    <div className="App" >
      <h2>Alterando JSX!</h2>
      <p>Olá {name.toUpperCase() /* pode interpolar script no html por meio de chaves { } */}</p>
      <p>Soma: {sum(2, 1)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  );
}

export default App;
