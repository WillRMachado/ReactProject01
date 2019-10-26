import React, { useState } from 'react'

function Formulario(props) {
    const [cod, setCod] = useState(555);
    const [descricao, setDescricao] = useState(props.minhaVar);
    const [cargaHoraria, setCargaHoraria] = useState(0);
    const [preco, setPreco] = useState(0);
    const [categoria, setCategoria] = useState("");

    
console.log(props.minhaVar)

    return (
        <div className="border-right pl-3 pr-3">
            <h3 className="border-bottom">Formulario</h3>
            <form>
                <div className="form-group row">
                    <label htmlFor="codigo"
                        className="col-sm-3 col-form-label">
                        Código:</label>
                    <div className="col-sm-9 col-6">
                        <input type="number"
                            className="form-control" id="codigo" value={cod} onChange={(e) => setCod(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="descrição"
                        className="col-sm-3 col-form-label">
                        Descrição:</label>
                    <div className="col-sm-9">
                        <input type="text"
                            className="form-control" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="cargaHoraria"
                        className="col-sm-3 col-form-label">
                        Carga Horária:</label>
                    <div className="col-sm-9 col-6">
                        <input type="number"
                            className="form-control" id="cargaHoraria" value={cargaHoraria} onChange={(e) => setCargaHoraria(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="preco"
                        className="col-sm-3 col-form-label">
                        Preço:</label>
                    <div className="col-sm-9 col-6">
                        <input type="text"
                            className="form-control" id="preco" value ={preco}  onChange={(e)=>setPreco(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="categoria"
                        className="col-sm-3 col-form-label">Categoria:</label>
                    <div className="col-sm-9 col-6">
                        <select className="form-control" id="categoria"  value ={categoria}  onChange={(e)=>setCategoria(e.target.value)} >
                            <option>INFORMATICA</option>
                            <option>ENGENHARIA</option>
                            <option>ADMINISTRACAO</option>
                            <option>REDES</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <button
                        className="btn btn-primary ml-3 mb-3">
                        Adicionar</button>
                </div>
            </form>
        </div>
    )



}


export default Formulario