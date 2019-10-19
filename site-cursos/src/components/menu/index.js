import React from 'react';

export default class Menu extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">ABC Cursos</a>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#/cursos">Cursos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/contato">Contato</a>
                        </li>
                    </ul>
                </div>
            </nav>)
    }
}