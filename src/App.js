import './App.css';
import People from './components/People';
import SayMyName from './components/SayMyName';
import Phrase from './components/Phrase';
import List from './components/List';

function App() {

  const name = "Maria"

  return (
    <div className="App" >
      <h1>Testanado CSS</h1>
      <Phrase />
      <Phrase />
      <SayMyName name="Matheus" />
      <SayMyName name="João" />
      <SayMyName name={name} />
      <People name="Murilo" age="25" profession="Desenvolvedor" photograph="https://via.placeholder.com/150" />
      <List />
    </div>
  );
}

export default App;
