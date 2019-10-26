import React, { Component } from 'react';
import Cabecalho from '../../components/menu/cabecalho';

import ContatoForm from './form'



    export default class Curso extends Component {
        render() {
        return (
            <div className="container">
            <Cabecalho titulo="Contato"
            subtitulo="entre em contato conosco" />
            <ContatoForm></ContatoForm>
            </div>
        )
    }
}