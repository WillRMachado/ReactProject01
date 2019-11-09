import React from 'react'
import { connect } from 'react-redux'

import {
    alteraCodigo,
    alteraCargaHoraria,
    alteraPreco,
    alteraDescricao,
    alteraCategoria
} from '../../../actions/curso-action'

import { bindActionCreators } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';



const trazStoreParaProps = reduxState => ({
    codigo: reduxState.curso.codigo,
    descricao: reduxState.curso.descricao,
    cargaHoraria: reduxState.curso.cargaHorariaigo,
    preco: reduxState.curso.preco,
    categoria: reduxState.curso.categoria,
    textoBotao: reduxState.curso.textoBotao
})


const dasPropsProRedux = despaxador => bindActionCreators({
    alteraCodigo,
    alteraCargaHoraria,
    alteraPreco,
    alteraDescricao,
    alteraCategoria
}, despaxador)

class Formulario extends React.Component {


    render() {


        // window.alert(this.props.codigo)

        const {
            codigo,
            preco,
            descricao,
            cargaHoraria,
            categoria,


            alteraCodigo,
            alteraPreco,
            alteraDescricao,
            alteraCargaHoraria,
            alteraCategoria,
         } = this.props

        // window.alert(codigo)

        return (
            <div className="border-right pl-3 pr-3">
                <h3 className="border-bottom">Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="codigo"
                            className="col-sm-3 col-form-label">
                            Código:
                        </label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="codigo" value={codigo}
                                onChange={alteraCodigo} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="descrição"
                            className="col-sm-3 col-form-label">
                            Descrição:
                        </label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" id="descricao" value={descricao}
                                onChange={alteraDescricao} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="cargaHoraria"
                            className="col-sm-3 col-form-label">
                            Carga Horária:</label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="cargaHoraria" value={cargaHoraria}
                                onChange={alteraCargaHoraria} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="preco"
                            className="col-sm-3 col-form-label">
                            Preço:</label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="preco" value={preco}
                                onChange={alteraPreco} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="categoria"
                            className="col-sm-3 col-form-label">Categoria:</label>
                        <div className="col-sm-9">
                            <select className="form-control" id="categoria" value={categoria}
                                onChange={alteraCategoria}>
                                <option>INFORMATICA</option>
                                <option>ENGENHARIA</option>
                                <option>ADMINISTRACAO</option>
                                <option>REDES</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button onClick={this.props.adicionarCurso}
                            className="btn btn-primary ml-3 mb-3 mr-3">
                            {this.props.textoBotao}
                        </button>

                        <button className="btn btn-primary ml-3 mb-3"
                            onClick={this.props.limpar}>Limpar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}


export default connect(trazStoreParaProps, dasPropsProRedux)(Formulario)