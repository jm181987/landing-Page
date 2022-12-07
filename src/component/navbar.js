import React from "react";

export function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link " href="#">{props.menu1}
                            <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">{props.menu2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">{props.menu3}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">{props.menu4}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}