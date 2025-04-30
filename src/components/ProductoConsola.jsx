import { useEffect } from "react";

// Recibimos el arreglo
function ProductoConsola({ productos }) {
  // Usamos useEffect para ejecutar este código cuando la prop 'productos' cambie
  useEffect(() => {
    console.log("--- Listado de Productos en Consola ---");

    // Verifica que tenemos un arreglo
    if (Array.isArray(productos)) {
      productos.forEach((producto) => {
        //recorre el arreglo
        if (
          producto &&
          typeof producto.descripcion === "string" &&
          typeof producto.precio === "string"
        ) {
          console.log(
            `Producto: ${producto.descripcion} - Precio: $${producto.precio}`
          );
        } else {
          console.log("Error de producto");
        }
      });
    } else {
      console.log("El prop 'productos' recibido no es un array:", productos);
    }

    console.log("---------------------------------------------------------");
  }, [productos]); // <--- Dependencia: el efecto se ejecuta cuando 'productos' cambia

  return null;
}

export default ProductoConsola;
