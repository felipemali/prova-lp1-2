export const CREATE_TABLE_ESPECIE = `
  create table if not exists especie (
    id integer primary key,
    nome_cientifico text not null,
    nome_popular text not null,
    habitat text not null,
    familia text not null,
    ordem text not null
  )
`

export const CREATE_TABLE_ESPECIME = `
    create table if not exists especime (
      id integer primary key,
      numero_serie text not null,
      apelido text not null,
      id_especie integer not null,
      foreign key(id_especie)
        references especie(id)
    )
`

export const INSERT_ESPECIE = `
      insert into especie values (
        ?, ?, ?, ?, ?, ?
      )
`

export const INSERT_ESPECIME = `
      insert into especime values (
        ?, ?, ?, ?
      )
`

export const SELECT_ESPECIES_BY_HABITAT = `
        select * from especie where lower(habitat) like lower(?)
`

export const SELECT_ESPECIE_BY_NOME_CIENTIFICO = `
        select * from especie where lower(nome_cientifico) = lower(?)
`

export const SELECT_ESPECIME_BY_ID_ESPECIE = `
        select * from especime where id_especie = ?
`

export const TRUNCATE_ESPECIE = `
        delete from especie
`

export const TRUNCATE_ESPECIME = `
        delete from especime
`
