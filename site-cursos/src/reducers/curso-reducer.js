

const INITIAL_STATE = {
    codigo: '123',
    descricao: '',
    cargaHoraria: 20.2,
    preco: 150.2,
    categoria: 'INFORMATICA',
    textoBotao: 'Adicionar',
    lista: [{ _id: '-1', codigo: 123, descricao: 'curso Testinho' }],


}



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LIMPAR_FORM': return INITIAL_STATE
        case 'ATUALIZA CODIGO': return {...state, codigo: action.value}
        case 'ATUALIZA DESCRICAO': return {...state, descricao: action.value}
        case 'ATUALIZA CARAGAHORARIA': return {...state, cargaHoraria: action.value}
        case 'ATUALIZA PRECO': return {...state, preco: action.value}
        case 'ATUALIZA CATEGORIA': return {...state, categoria: action.value}
        default: return state
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