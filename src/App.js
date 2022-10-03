import './App.css';
import AnotherList from './components/AnotherList';

function App() {

  const myItems = ['React', 'Angular', 'Vue'];

  return (
    <div className="App" >
      <h1>Renderização de Listas</h1>
      <AnotherList items={myItems} />
      <AnotherList items={[]} />
    </div>
  );
}

export default App;