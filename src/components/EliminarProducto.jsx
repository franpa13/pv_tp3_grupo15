import React from "react";
//recibimos el arreglo
function EliminarProducto({ productos, setProductos }) {
  const handleRemoveLowest = () => {
    if (!productos || productos.length === 0) {
      alert("No hay productos para eliminar.");
      console.log("Intento de eliminar producto, pero el array está vacío.");
      return;
    }

    // 2. Encontrar el índice del producto con el precio más bajo
    let precioMasBajo = Infinity;
    let indiceMasBajo = -1; // Inicializamos con un índice inválido

    // Recorremos el arreglo
    productos.forEach((producto, index) => {
      const precioActual = parseInt(producto.precio, 10);

      if (!isNaN(precioActual) && precioActual < precioMasBajo) {
        precioMasBajo = precioActual;
        indiceMasBajo = index; // Guardamos el índice de este producto
      }
    });

    if (indiceMasBajo === -1) {
      console.warn(
        "No se pudo determinar el producto más barato (problema con los datos de precio)."
      );
      alert("No se pudo determinar el producto más barato para eliminar.");
      return;
    }

    const nuevosProductos = productos.filter(
      (_, index) => index !== indiceMasBajo
    );

    const productoEliminado = productos[indiceMasBajo];
    console.log(
      `Eliminando producto con el precio más bajo: ${productoEliminado.descripcion} - $${productoEliminado.precio}`
    );

    setProductos(nuevosProductos);

    // se muestra un mensaje al usuario
    alert(
      `Se eliminó el producto con el precio más bajo: ${productoEliminado.descripcion}`
    );
  };

  // Renderizamos el botón que ejecutará la función al hacer clic
  return (
    <div>
      {/* Un pequeño margen para separarlo */}
      <button onClick={handleRemoveLowest}>
        Eliminar producto con el precio más bajo
      </button>
    </div>
  );
}

export default EliminarProducto;
