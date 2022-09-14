import Phrase from './Phrase.js'

/* Para criar um componente é nescessario declarar uma function com os dados no escopo */
function HelloWord() {
  return (
    // as marcações retorna um componente que será renderizado
    <div>
      <Phrase />
      <h1>Meu primeiro componente.</h1>
      {/* A criação de componentes nos permite a reutilização */}
      <Phrase />
      <Phrase />
    </div>
  );
}

export default HelloWord;