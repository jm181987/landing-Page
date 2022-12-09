
import React from "react";
import { Navbar } from "/src/component/navbar.js";
import { Jumbotron } from "/src/component/jumbotron.js";
import { ContenedorCard } from "/src/component/contenedorCard.js";
import { Footer} from "/src/component/footer.js";


export function Main() {
    return (
        <>
            {/* Navbar */}
            <Navbar classname="nav" menu1={"Inicio"} menu2={"Equipos"} menu3={"Historia"} menu4={"Contacto"} />
            {/* fin Navbar */}
            <div classname="container">
                {/* Jumbotron  */}
                < Jumbotron pageName={"Primera página en React"} description={"Realizada por Jorge Marquez"} callToAction={"Haz click aquí!"}/>                
                {/* Fin Jumbotron */}
                <ContenedorCard />
            </div>
            {/* Footer */}
            <Footer copyright={`Copyright \u00a9 Mi Website 2022`}/>
            {/* Fin Footer */}
        </>
    )
}


//default export contenedor;