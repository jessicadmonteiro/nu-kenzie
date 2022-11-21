import Logo from "../assets/NuKenzie.svg";
import "./style.css";
import { useState } from "react";
import Render from "../render";
import RenderTotal from "../renderTotal";
import Register from "../register";

function Home({ setPage }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("Todos");

  const arrayFilter = data.filter((element) =>
    filter === "Todos" ? true : element.typeDescription === filter
  );

  function Remove(removeData) {
    const filterData = data.filter(
      (dataCard) => dataCard.description !== removeData
    );
    setData(filterData);
  }

  function VelueTotal(valueData) {

    const valueEntrada = valueData.filter(
      (element) => element.typeDescription === "Entrada"
    );
    const mapValeEntrada = valueEntrada
      .map((value) => +value.valueNumber)
      .reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    const valueDespesa = valueData.filter(
      (element) => element.typeDescription === "Despesa"
    );
    const mapValeuDespesa = valueDespesa
      .map((value) => +value.valueNumber)
      .reduce((acumulador, valorAtual) => acumulador - valorAtual, 0);

    const total = mapValeEntrada + mapValeuDespesa
    console.log(total)

    return total
  }

  return (
    <>
      <header>
        <div className="container">
          <img src={Logo} alt="" />
          <button
            type="button"
            className="buttonStart"
            onClick={() => setPage("")}
          >
            Inicio
          </button>
        </div>
      </header>
      <div className="containerMain">
        <main className="mainHome">
          <Register setData={setData} />
          {data.length >= 1 && <RenderTotal VelueTotal={VelueTotal(data)} />}
        </main>
        <aside>
          <div className="headerAside">
            <h3 className="titleFinancialSummary">Resumo financeiro</h3>
            <div className="containerButton">
              <button
                className="buttonFilterHome"
                onClick={() => setFilter("Todos")}
              >
                Todos
              </button>
              <button
                className="buttonFilterHome"
                onClick={() => setFilter("Entrada")}
              >
                Entradas
              </button>
              <button
                className="buttonFilterHome"
                onClick={() => setFilter("Despesa")}
              >
                Despesas
              </button>
            </div>
          </div>
          {data.length === 0 && (
            <section className="sectionNoData">
              <h2>Você ainda não possui nenhum lançamento</h2>
              <ul>
                <li>
                  <div className="line1">.</div>
                  <div className="line2">.</div>
                </li>
                <li>
                  <div className="line1">.</div>
                  <div className="line2">.</div>
                </li>
                <li>
                  <div className="line1">.</div>
                  <div className="line2">.</div>
                </li>
              </ul>
            </section>
          )}
          {arrayFilter.map((data, index) => (
            <Render
              key={index}
              description={data.description}
              valueNumber={data.valueNumber}
              typeDescription={data.typeDescription}
              Remove={() => Remove(data.description)}
              id={index}
            />
          ))}
        </aside>
      </div>
    </>
  );
}

export default Home;
