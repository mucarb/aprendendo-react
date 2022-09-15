import Item from "./Item";

function List() {
  return (
    // o Fragment permite a criação multiplo elementos filhos em um componente sem a nescessidade de declarar uma tag pai
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item brand="Ferrari" releaseYear={1985} />
        <Item brand="Fiat" releaseYear={1964} />
        <Item brand="Renault" />
        <Item brand="Ford" releaseYear={1990} />
        <Item />
      </ul>
    </>
  );
}

export default List;