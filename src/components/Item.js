// pacote do react para identar props
import PropTypes from 'prop-types';

function Item({ brand, releaseYear }) {
  return (
    <>
      <li>{brand} - {releaseYear}</li>
    </>
  );
}

// Usando componente para criar o recurso de validacao
Item.propTypes = {
  brand: PropTypes.string.isRequired, // definindo que a prop é uma string e é requerida
  releaseYear: PropTypes.number,
};

// declarando props padrão, permitindo com que ao chamar o componente não seja nescessario atribuir valores as props
Item.defaultProps = {
  brand: 'Insira uma marca',
  releaseYear: 0,
};

export default Item;