import React, { Component } from 'react';
import Cabecalho from '../../components/menu/cabecalho';

import {connect} from 'react-redux'
 
import ContatoForm from './form'



   class Curso extends Component {
        render() {
        return (
            <div className="container">
            <Cabecalho titulo="Contato"
            subtitulo= {`entre em contato conosco em ${this.props.data}`} />
            <ContatoForm></ContatoForm>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    data:state.contato.data
})
export default connect(mapStateToProps)(Curso)
