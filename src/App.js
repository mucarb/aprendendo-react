import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import People from './components/People';

function App() {

  const name = "Maria"

  return (
    <div className="App" >
      <HelloWord />
      {/* Chamando os componentes com as props definida */}
      <SayMyName name="Matheus" />
      <SayMyName name="João" />
      <SayMyName name={name} />
      <People name="Murilo" age="25" profession="Desenvolvedor" photograph="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
