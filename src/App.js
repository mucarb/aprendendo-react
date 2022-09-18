import './App.css';
import Event from './components/Event.js';
import Form from './components/Form';

function App() {
  return (
    <div className="App" >
      <h1>Testanado Eventos</h1>
      <Event number='1' />
      <Form />
    </div>
  );
}

export default App;
