import React from 'react'
import { ArticuloItem } from './ArticuloItem'

export const GridItems = ( {data} ) => {
    const articulos = data['data']
    return (
        <div className="mt-4 w-75 ml-auto mr-auto">
            <div className="d-flex justify-content-around flex-wrap">
                { articulos.map( (articulo) => <ArticuloItem info={articulo} key={articulo['titulo']} /> ) }
            </div>
        </div>
    )
}
