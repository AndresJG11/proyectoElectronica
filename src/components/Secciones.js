import React, { useState } from 'react'
import { GridItems } from './GridItems'

// Agregar ecuaciones

export const Secciones = () => {

    const secciones = [{ id: "sisDigitales", nombre: "Sistemas Digitales" },
    { id: "teleco", nombre: "Telecomunicaiones" },
    { id: "electronica", nombre: "Electrónica" },
    { id: "autoControl", nombre: "Automatización y Control" },
    { id: "proyectos", nombre: "Proyectos" },
    { id: "tutoriales", nombre: "Tutoriales" },
    { id: "pedidos", nombre: "Pedidos" }];

    const [state, setState] = useState('sisDigitales');

    const handleChangeSeccion = (e) => {
        e.preventDefault();
        const newActive = e.target.id;
        setState(newActive);
    }

    const url1 = 'https://image.winudf.com/v2/image/Y29tLnRvZ2xlZnJpdHouYXJkdWlub2JsaW5rbGl2ZXdhbGxwYXBlcl9zY3JlZW5fMF8xNTQwNDIzMjMzXzA3NA/screen-0.jpg?fakeurl=1&type=.jpg'
    const url2 = 'https://images-na.ssl-images-amazon.com/images/I/51dnmggOWKL._AC_UL600_SR600,600_.jpg'
    const url3 = 'https://static.mercadonegro.pe/wp-content/uploads/2020/06/11095753/antenas-5g-coronavirus.jpg'
    const url4 = 'https://sites.google.com/site/iosparagns3/_/rsrc/1459135528810/config/customLogo.gif?revision=2'
    const url5 = 'https://i.pinimg.com/originals/b5/dc/5e/b5dc5e9ce1b93f346435a4ea8293ec5f.jpg'
    const url6 = 'https://i.ytimg.com/vi/Tqhh2-jZkWg/maxresdefault.jpg'

    const data = {
        sisDigitales: {
            data: [
                {
                    imagen: url1,
                    titulo: '¿Que es un microcontrolador?',
                    descripcion: 'Aprenderás que es un microcontrolador, cual es su diferencia con el microprocesador y cuales son los mas usados actualmente'
                },
                {
                    imagen: url2,
                    titulo: 'Tutorial programación FPGA',
                    descripcion: 'El tutorial incluye las nociones básicas de VHDL y como simular los proyectos realizados'
                },
                {
                    imagen: url1,
                    titulo: 'Tutorial programación FPGA3',
                    descripcion: 'El tutorial incluye las nociones básicas de VHDL y como simular los proyectos realizados'
                },
                {
                    imagen: url2,
                    titulo: 'Tutorial programación FPGA4',
                    descripcion: 'El tutorial incluye las nociones básicas de VHDL y como simular los proyectos realizados'
                },
                {
                    imagen: url1,
                    titulo: 'Tutorial programación FPGA34',
                    descripcion: 'El tutorial incluye las nociones básicas de VHDL y como simular los proyectos realizados'
                },
                {
                    imagen: url2,
                    titulo: 'Tutorial programación FPGA334',
                    descripcion: 'El tutorial incluye las nociones básicas de VHDL y como simular los proyectos realizados'
                },

            ]
        },
        teleco:{
            data: [
                {
                    imagen: url3,
                    titulo: 'Todo lo que debes saber sobre la tecnología 5G',
                    descripcion: 'Diferentes historias suenan sobre la relación entre la covid-19 y las antenas 5G ¿Sabías que esto ocurrió también con la tecnología 4G?'
                }
                ,
                {
                    imagen: url4,
                    titulo: 'Tutorial GNS3',
                    descripcion: 'Aprende como simular redes utilizando el software GNS3'
                }
            ]
        }, 
        electronica:{
            data: [
                {
                    imagen: 'https://firebasestorage.googleapis.com/v0/b/proyecto-electronica-91fd6.appspot.com/o/secciones%2Felectronica%2FAmplificador%20clase%20AB%20de%C2%A02W%2FWhatsApp%20Image%202020-08-31%20at%208.59.22%20PM.jpeg?alt=media&token=367a7616-9301-4ef0-8c24-3ffdb8f9269a',
                    titulo: 'Amplificador clase AB de 2W',
                    descripcion: 'Ecuaciones de diseño, vídeo ilustrativo para el diseño y funcionamiento de un amplificador de potencia'
                },
                {
                    imagen: url6,
                    titulo: 'Fuente simple regulada de 5v',
                    descripcion: 'Fuente regulada de 5 voltios para exigencia de cargas de un amperio con diodo zener'
                }
            ]
        }, 
    }

    return (
        <div>
            <ul className="nav nav-pills justify-content-center bg-light mt-4">
                {secciones.map(({ nombre, id }) =>
                    <li className="nav-item" key={id}>
                        <a className={`nav-link ${state === id && 'active'}`} href="/" id={id} onClick={handleChangeSeccion}> {nombre} </a>
                    </li>
                )}
            </ul>
            <GridItems data={data[state]} />
        </div>
    )
}
