import "./style.css";

function RenderTotal ({VelueTotal}) {
    return (
        <section className="containerRenderTotal">
            <div className="containerValue">
            <h3>Valor total</h3>
            <span className="valueT">$ {VelueTotal} </span>
            </div>
            <p className="text">O valor se refere ao saldo</p>
        </section>
    )
}

export default RenderTotal