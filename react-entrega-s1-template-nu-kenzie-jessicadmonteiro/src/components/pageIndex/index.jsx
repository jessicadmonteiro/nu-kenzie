import "./style.css";
import Logo from "../assets/NuKenzie1.svg";
import Imagem from "../assets/Group 262.svg"


function PageInitial({setPage}) {
  return (
    <div className="divPageInitial">
      <main>
        <div className="containerLogoText">
          <img className="logoPageInitial" src={Logo} alt="" />
          <h2 className="titlePageInitial">Centralize o controle das suas finanças</h2>
          <p className="textPageInitial">de forma rápida e segura</p>
          <button className="butInicial" type="button" onClick={() => setPage("pageHome")} >Iniciar</button>
        </div>
        <div className="containerImagem">
          <img src={Imagem} alt="" />
        </div>
      </main>
    </div>
  );
}

export default PageInitial;
