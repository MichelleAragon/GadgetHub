import React from 'react'

export const SearchGH = () => {
  return (
    <>
        <div className="buscar-comprar">
            <div className="div-search">
                <button className="button-search" type="button">
                <i className="fa-solid fa-magnifying-glass icon-search"></i></button>
                <input className="input-search" type="text" placeholder="Search" />
            </div>
                <button type="button"><i className="fa-solid fa-cart-shopping"></i></button>
        </div>
    </>
  )
}
