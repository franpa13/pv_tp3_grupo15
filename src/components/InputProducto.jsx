import { useState } from "react";
import App from "../App";

function InputProducto(props) {
  const [productos, setProductos] = props.productos;
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = () => {
    setProductos([...productos, { descripcion: descripcion, precio: precio }]);
    setDescripcion("");
    setPrecio("");
  };

  return (
    <div>
      <label> Ingrese el producto </label>
      <input
        type="text"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <br></br>
      <label> Ingrese el precio </label>
      <input
        type="text"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleSubmit}>Guardar</button>
    </div>
  );
}
export default InputProducto;
