function Event({ number }) {

  // declarando função que será chamada no evento do botão
  function myEvent() {
    console.log(`Evento ativado! ${number}`);
  }

  return (
    <div>
      <p>Clique para disparar um evento</p>
      {/* chamando evento de clique em um botão */}
      <button onClick={myEvent}>Ativar!</button>
    </div>
  );
}

export default Event;