import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import {
    alteraData,
    alteraNome,
    alteraEmail,
    alteraAssunto
} from '../../../actions/contato-actions';


const mapDispatchToProps = dispatch => bindActionCreators({
    alteraData,
    alteraNome,
    alteraEmail,
    alteraAssunto
}, dispatch)


class FormContato extends Component {
    render() {
        return (
            <div>
                <h3 className="border-bottom">Formulario</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="data"
                            className="col-sm-3 col-form-label">Data:</label>
                        <div className="col-sm-9">
                            <input type="date"
                                className="form-control" id="data"
                                value={this.props.data}
                                onChange={this.props.alteraData}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nome"
                            className="col-sm-3 col-form-label">Nome:</label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" id="nome"
                                value={this.props.nome}
                                onChange={this.props.alteraNome}
                                 />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email"
                            className="col-sm-3 col-form-label">Email:</label>
                        <div className="col-sm-9">
                            <input type="email"
                                className="form-control" id="email"
                                value={this.props.email} 
                                onChange={this.props.alteraEmail}
                                />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="assunto"
                            className="col-sm-3 col-form-label">Assunto:</label>
                        <div className="col-sm-9">
                            <textarea className="form-control"
                                id="assunto" rows="5"
                                value={this.props.assunto} 
                                onChange={this.props.alteraAssunto}
                                />
                        </div>
                    </div>
                    <div className="form-group row">
                        <button className="btn btn-primary ml-3 mb-3">
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>

        )
    }


}




const mapStoreToProps = store => ({
    data: store.contato.data,
    nome: store.contato.nome,
    email: store.contato.email,
    assunto: store.contato.assunto

})


// export default FormContato

export default connect(mapStoreToProps, mapDispatchToProps)(FormContato);