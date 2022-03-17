import React, { useState } from 'react'

const ItemCount = (ValorInicial) => {
    const [contador,setContador] = useState (ValorInicial)


  return (
    <div>   
    <button>-</button>
    <span>{contador}</span>
    <button>+</button>
    </div> 
  )
}

export default ItemCount