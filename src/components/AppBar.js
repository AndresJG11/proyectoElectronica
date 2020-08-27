import React from 'react'

export const AppBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">ELECTRON UQ</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="7"> Inicio <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="/"> ¿Quiénes somos? </a>
                    <a className="nav-link" href="/"> Contacto </a>

                </div>
            </div>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Escribe tu búsqueda" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Buscar </button>
            </form>
        </nav>
    )
}
