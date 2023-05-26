export const CREATE_TABLE = `
    create table if not exists contact (
        id integer primary key,
        name text not null,
        email text not null,
        phone text not null
    )
`

export const INSERT_CONTACT = `
  insert into contact values (
    ?, ?, ?, ?
  )      
`

/**
 * selecionar todos os contatos cujo nome conter
 * uma determinada substring, independentemente se ela
 * está em maiúsculo ou minúsculo.
 *
 * Ex: Se no banco de dados eu tenho as seguintes pessoas:
 *
 * JOÃO DA SILVA
 * MARIA ABRAÃO NUNES
 * LETÍCIA CARVALHO
 *
 * e deseja-se recuperar as pessoas cujos nomes contenham
 * a substring "ão", logo as seguintes pessoas devem ser
 * retornadas:
 *
 * JOÃO DA SILVA
 * MARIA ABRAÃO NUNES
 */
export const SELECT_BY_NAME = `
    select * from contact where lower(name) like lower(?)
`

export const SELECT_BY_ID = `
    select * from contact where id = ?
`
