// importanto a folha de estilo para o componente
import style from './Phrase.module.css';

function Phrase() {
  return (
    <div className={style.phrase_container}>
      <p className={style.phrase_content}>
        Este é um componente com uma frase!
      </p>
    </div>
  );
}

export default Phrase;