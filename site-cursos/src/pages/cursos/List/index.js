import React, { Component } from 'react'

export default class Lista extends Component {

    exibirLinhas = () => {
        //retorna a lista de props se existir
        const cursos = this.props.cursos || [];
        return cursos.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>
            </tr>
        ));
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Lista de Cursos</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.exibirLinhas()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }


}