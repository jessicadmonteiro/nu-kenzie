import { useState } from "react"

function Register({setData}) {
    const [description, setDescription] = useState ("")
    const [valueNumber, setValueNumber] = useState ("")
    const [typeDescription, setTypeDescription] = useState ("")

  function preventSubmit(event) {
    event.preventDefault()
    const data = {
        description, 
        valueNumber, 
        typeDescription,
    }
    setData(
        (oldDatas) =>[...oldDatas, data])
  }

  return (
    <form className="containerDesciptionData " onSubmit={preventSubmit}>
      <p className="textDescription">Descrição</p>
      <input
        className="inputDescription"
        type="text"
        placeholder="Digite aqui sua descrição" onChange={event => setDescription(event.target.value)}
      />
      <p className="textEx">Ex: Compra de roupas</p>
      <div className="containerTextValue">
        <p className="textValue">Valor</p>
        <p className="textValue">Tipo de valor</p>
      </div>
      <div className="containerSpanSelect">
        <input className="inputNumber" type="Number" placeholder="R$" onChange={event => setValueNumber(event.target.value)} />
        <select name="" id="" onChange={event => setTypeDescription(event.target.value)}>
            <option value="">Selecionar</option>
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>
      <button className="textEnterValue" type="submit">
        Inserir valor
      </button>
    </form>
  )
}

export default Register;
