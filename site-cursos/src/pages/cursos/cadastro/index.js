import React from 'react'
import Axios from 'axios'


import CursoForm from '../form'
// import CursoFormF from '../form/indexFunction'

import CursoList from '../List'


const URL = "http://localhost:3200/api/curso";

export default class Cadastro extends React.Component {
    state = {
        data:[]
    }

    componentWillMount(){
        this.listar()
    }

    listar(){
        Axios.get(URL).then(response => this.setState({...this.state, data : response.data}))
    }



    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm />
                    {/* <CursoFormF /> */}

                </div>
                <div className="col-md-6">
                    <CursoList cursos={this.state.data}/>

                </div>
            </div>
        )

    }


}
