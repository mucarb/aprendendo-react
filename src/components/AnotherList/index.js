function AnotherList({ items }) {
  return (
    <>
      <h3>Lista de coisas:</h3>
      {items.length > 0 ? ( // usando condição ternaria para verifica se exite itens na lista        
        items.map((item, index) => // função map para renderizar itens de arrays, item define os itens do array, index define uma key para cada item
          <p key={index}>{item}</p>)// a propriedade key define uma identificação ara o item a ser renderizado        
      ) : (
        <p>Não há itens na lista!</p>
      )}
    </>
  );
}

export default AnotherList;