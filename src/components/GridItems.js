import React from 'react'
import { ArticuloItem } from './ArticuloItem'

export const GridItems = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
        <div className="d-flex justify-content-between w-75">
            <ArticuloItem />
            <ArticuloItem />
            <ArticuloItem />
            <ArticuloItem />
        </div>  
        </div>
    )
}
