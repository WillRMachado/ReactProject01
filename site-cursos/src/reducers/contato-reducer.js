const INITIAL_STATE = {
    data: '2018-05-20',
    nome: 'Jose',
    email: 'jose@impacta.com.br',
    assunto: 'Desejo saber mais informações'
}

export default (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case 'ATUALIZA_DATA': return{...state,data:action.info}
        case 'ATUALIZA_NOME': return{...state,nome:action.info}
        case 'ATUALIZA_EMAIL': return{...state,email:action.info}
        case 'ATUALIZA_ASSUNTO': return{...state,assunto:action.info}


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