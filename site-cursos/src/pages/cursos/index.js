import React, { Component } from 'react';
import Cabecalho from '../../components/menu/cabecalho';

    export default class Curso extends Component {
        render() {
        return (
            <div className="container">
                <Cabecalho titulo="Cursos"
                subtitulo="cadastro de cursos" />
            </div>
        )
    }
}