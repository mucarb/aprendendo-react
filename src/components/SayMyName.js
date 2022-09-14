// declarando uma Prop (propridade) no componente
function SayMyName(props) {
  return (
    <div>
      {/* chamando a props com um atributo que lhe pertence */}
      <p>Fala aí {props.name}, tudo bom!?</p>
    </div>
  );
}

export default SayMyName;