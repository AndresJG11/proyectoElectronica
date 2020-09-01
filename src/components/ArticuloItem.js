import React from 'react'

export const ArticuloItem = ({info}) => {
    const { titulo, descripcion, imagen } = info;
    return (
            <div className="card mb-2 animate__animated animate__fadeIn" style={{maxWidth:300}}>
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {titulo} </h5>
                    <p className="card-text"> {descripcion} </p>
                    <a href="/" className="btn btn-primary"> Ir al articulo </a>
                </div>
            </div>
    )
}
