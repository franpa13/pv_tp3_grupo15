import React from "react";

function OrdenarProducto({ productos }) {
  const productosOrdenados = [...productos]; //  creamos  una copia superficial

  productosOrdenados.sort((a, b) => {
    const precioA = parseInt(a.precio, 10); // Precio del primer producto en la comparación
    const precioB = parseInt(b.precio, 10); // Precio del segundo producto en la comparación

    if (isNaN(precioA) || isNaN(precioB)) {
      return 0;
    }

    // Para ordenar de MENOR a MAYOR (ascendente), restamos precioB a precioA.
    // Si precioA es menor que precioB  retorna negativo -> a va antes que b.
    // Si precioA es mayor que precioB  retorna positivo -> a va después de b.
    // Si son iguales , retorna cero -> su orden relativo no cambia.
    return precioA - precioB;
  });
  // Renderizamos la lista de productos ya ordenada
  return (
    <div>
      <h2>Productos Ordenados por Precio (Menor a Mayor):</h2>

      {/* Verificamos si el array ordenado tiene elementos antes de renderizar */}
      {productosOrdenados.length > 0 ? (
        <ul>
          {productosOrdenados.map((producto, index) => (
            <li key={index}>
              {producto.descripcion} - ${producto.precio}
            </li>
          ))}
        </ul>
      ) : (
        // Mensaje si la lista ordenada está vacía
        <p>No hay productos para mostrar ordenados.</p>
      )}
    </div>
  );
}

export default OrdenarProducto;