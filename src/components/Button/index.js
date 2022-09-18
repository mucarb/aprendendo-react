// componente separado por pasta, pasta recebe o nome do componente e o arquivo é declarado como index
function Button(props) {
  return <button onClick={props.event}>
    {props.text}
  </button>;
}

export default Button;