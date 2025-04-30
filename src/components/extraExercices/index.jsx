import React, { useState } from "react";



import Titulo from "../Titulo";

import InputProducto from "../InputProducto";
import ProductoConsola from "../ProductoConsola";
import Productosmenores from "../Productosmenores";
import OrdenarProducto from "../OrdenarProducto";
import EliminarProducto from "../EliminarProducto";

export const ExtraExercices = () => {
  const [precio, setPrecio] = useState(""); //arreglo de producto
  const [descripcion, setDescripcion] = useState("");
  const [productos, setProductos] = useState([
    { descripcion: "azucar", precio: "15" },
    { descripcion: "café", precio: "2500" },
    { descripcion: "leche", precio: "1200" },
    { descripcion: "pan", precio: "18" },
    { descripcion: "huevos", precio: "1800" },
  ]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {" "}
        <h1>Ejercicios extra </h1>
      </div>
      <div>
        <Titulo></Titulo>
        <InputProducto productos={[productos, setProductos]}></InputProducto>
      </div>
      <div>
        <EliminarProducto productos={productos} setProductos={setProductos} />
      </div>
      <div>
        <h2>Lista de productos </h2>
        <ul>
          {productos.map((producto, index) => (
            <li key={index}>
              {producto.descripcion} - ${producto.precio}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Productosmenores productos={productos} />
      </div>
      <div>
        <OrdenarProducto productos={productos} />
      </div>

      <ProductoConsola productos={productos} />
    </>
  );
};
