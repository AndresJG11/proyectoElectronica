import React from 'react'

export const Carousel = () => {
    return (
        <div className="d-flex justify-content-center mt-3 mh-50">
            <div id="carouselExampleFade" className="carousel slide carousel-fade w-75" style={{ maxWidth: "50%" }} data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={require("../static/images/arduino.jpg")} className="d-block w-100 " alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5> Sistemas digitales </h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={require("../static/images/telecomunicaciones.jpg")} className="d-block w-100 " alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5> Telecomunicaciones </h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require("../static/images/automatizacion.jpg")} className="d-block w-100 " alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5> Automatización y control </h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
            </div>
        </div>
    )
}
