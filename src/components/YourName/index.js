function YourName({ setName }) {
  return (
    <div>
      <p>Digite seu nome:</p>
      <input type="text" placeholder="Informe um nome!" onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default YourName;