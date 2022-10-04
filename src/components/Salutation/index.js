function Salutation({ name }) {

  function generateGreeting(someName) {
    return `Olá ${someName}, prazer em conhece-lo!`
  }

  return (
    <>
      {name && <p>{generateGreeting(name)}</p>}
    </>
  )
}

export default Salutation;