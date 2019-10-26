export const alteraData = e => {
    return ({
        type: 'ATUALIZA_DATA',
        info: e.target.value,
    }
    )
}

export const alteraNome = e => {
    return ({
        type: 'ATUALIZA_NOME',
        info: e.target.value,
    }
    )
}

export const alteraEmail = e => {
    return ({
        type: 'ATUALIZA_EMAIL',
        info: e.target.value,
    }
    )
}

export const alteraAssunto = e => {
    return ({
        type: 'ATUALIZA_ASSUNTO',
        info: e.target.value,
    }
    )
}
