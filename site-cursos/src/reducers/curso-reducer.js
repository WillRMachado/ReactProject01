

const INITIAL_STATE = {
    codigo:'123',
    descricao:'',
    cargaHoraria:20.2,
    preco:150.2,
    categoria:'INFORMATICA',
    textoBotao:'Adicionar',
    lista:[{_id:'-1',codigo:123,descricao:'curso Testinho'}]

}



export default (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case 'LIMPAR_FORM': return INITIAL_STATE
        // case 'ADICIONA_CONTATO': return INITIAL_STATE




        default : return state
    }
}

// export default (state = INITIAL_STATE,action) =>{
//     switch(action.type){
//         default : return state
//     }
// }
// export default (state = INITIAL_STATE,action) =>{
//     switch(action.type){
//         case 'ATUALIZA_EMAIL': return{...state,data:action.info}
//         default : return state
//     }
// }
// export default (state = INITIAL_STATE,action) =>{
//     switch(action.type){
//         case 'ATUALIZA_ASSUNTO': return{...state,data:action.info}
//         default : return state
//     }
// }