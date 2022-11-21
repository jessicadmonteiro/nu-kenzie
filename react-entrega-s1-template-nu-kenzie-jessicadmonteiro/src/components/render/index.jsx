import "./style.css";
import Trash from "../assets/trash (1).png";

function Render({description, valueNumber, typeDescription, Remove}) {

  return (
    <ul>
      <li className={`${typeDescription}`}>
        <div>
          <h3>{description}</h3>
          <span>
          <p>R$ {valueNumber}</p>
          <button onClick={Remove}><img src={Trash} alt="" /></button>
          </span> 
        </div>
        <p className="valueType">{typeDescription}</p>
      </li>
    </ul>
  );
}

export default Render;
