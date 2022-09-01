import React from "react";
import Item from "./Item";
import dataJSON from "./data.json";

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado(props) {
  return (
    <div className="container">
      {arrayData.map(item => (
        <Item nombre={item.producto.nombre}
              descripcion={item.producto.descripcion}
              stock={item.stock}/>
          )
        )}
    </div>
  )
}
