import React from 'react'

export const ArticuloItem = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={require("../static/images/arduino.jpg")} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"> ¿Qué es un microcontrolador? </h5>
                <p className="card-text"> Aprenderás que es un microcontrolador, cual es su diferencia con el microprocesador y cuales son los mas usados actualmente </p>
                <a href="/" className="btn btn-primary"> Ir al articulo </a>
            </div>
        </div>
    )
}
