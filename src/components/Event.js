import Button from "./Button";

function Event() {

  // declarando função que será chamada no evento do botão
  function myEvent() {
    console.log(`Ativando o evento passado por props!`);
  }

  function anotherEvent() {
    console.log(`Ativando outro evento!`);
  }

  return (
    <div>
      <p>Clique para disparar um evento</p>
      {/* ativando o evento que é enviado para outro componente através da prop */}
      <Button event={myEvent} text="Primeiro evento" />
      <Button event={anotherEvent} text="Outro evento" />
    </div>
  );
}

export default Event;