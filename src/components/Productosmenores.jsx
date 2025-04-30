import React from "react";
// Este componente recibe el arreglo de productos
function Productosmenores({ productos }) {
  const precioMinimo = 20;
  const productosCaros = productos.filter((producto) => {
    const precioNumerico = parseInt(producto.precio, 10);

    return !isNaN(precioNumerico) && precioNumerico > precioMinimo;
  });

  return (
    <div>
      <h2>Productos con Precio Mayor a ${precioMinimo}:</h2>
      {productosCaros.length > 0 ? (
        <ul>
          {productosCaros.map((producto, index) => (
            <li key={index}>
              {producto.descripcion} - ${producto.precio}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          No hay productos con precio mayor a ${precioMinimo} en la lista
          actual.
        </p>
      )}
    </div>
  );
}

export default Productosmenores;
