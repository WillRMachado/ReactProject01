export const alteraCodigo = e => {
    return {
        type: 'ATUALIZA CODIGO',
        value: e.target.value
    }
}
export const alteraCargaHoraria = e => {
    return {
        type: 'ATUALIZA CARGAHORARIA',
        value: e.target.value
    }
}
export const alteraPreco = e => {
    return {
        type: 'ATUALIZA PRECO',
        value: e.target.value
    }
}
export const alteraDescricao = e => {
    return {
        type: 'ATUALIZA DESCRICAO',
        value: e.target.value
    }
}
export const alteraCategoria = e => {
    return {
        type: 'ATUALIZA CATEGORIA',
        value: e.target.value
    }
}