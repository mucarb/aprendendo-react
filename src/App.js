import { useState } from 'react';
import './App.css';
import Salutation from './components/Salutation';
import YourName from './components/YourName';

function App() {
  const [name, setName] = useState();

  return (
    <div className="App" >
      {/* State Lift permite refletir dados entre varios componentes, apenas elevando o state para o componente pai
      no exemplo vemos que atribuimos o valor (setName) enquanto o outro faz leitura (name) */}
      <h1>State Lift</h1>
      <YourName setName={setName} />
      <Salutation name={name} />
    </div>
  );
}

export default App;