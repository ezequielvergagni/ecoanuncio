import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting, tituloDeProducto}) => {
  return (
    <div>
        <h1> {greeting} </h1>
        <h2>{tituloDeProducto}</h2>
        <ItemCount ValorInicial = {1} /> 
    </div>
  )
}

export default ItemListContainer