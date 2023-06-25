export const CREATE_TABLE_BTC_VALUE = `
  create table if not exists btc_value (
    id integer primary key,
    read_time text not null,
    price real not null
  )
`;

/**
 * aqui é onde insiro os valores
 */
export const INSERT_BTC_READ = `
insert into btc_value (id, read_time, price) values (?, ?, ?)
`;

/**
 * aqui é a busca, fazer o select direto no price acho que é melhor
 */
export const SELECT_AVG_PRICE = `
select price from btc_value
`;
