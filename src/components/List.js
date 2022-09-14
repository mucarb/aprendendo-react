import Item from "./Item";

function List() {
  return (
    // o Fragment permite a criação multiplo elementos filhos em um componente sem a nescessidade de declarar uma tag pai
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item brand="Ferrari"/>
        <Item brand="Fiat"/>
        <Item brand="Ford"/>
      </ul>
    </>
  );
}

export default List;