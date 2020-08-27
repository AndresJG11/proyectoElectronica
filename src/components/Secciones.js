import React from 'react'

export const Secciones = () => {
    return (
        <ul className="nav nav-pills justify-content-center bg-light mt-4">
            <li className="nav-item">
                <a className="nav-link active" href="/"> Sistemas Digitales </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> Telecomunicaciones </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> Automatización y Control </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> Proyectos </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> Tutoriales </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> Pedidos </a>
            </li>
        </ul>
    )
}
