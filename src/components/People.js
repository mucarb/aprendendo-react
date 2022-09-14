// simplificando o argumento de props para simplificar sua chamado no código
function People({ name, age, profession, photograph }) {
  return (
    <div>
      <img src={photograph} alt={name} />
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {profession}</p>
    </div>
  );
}

export default People;