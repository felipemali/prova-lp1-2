import { coinEmitter } from "./emitters/coin_emitter.js";
import { openDB } from "./config/db.js";
import {
  CREATE_TABLE_BTC_VALUE,
  INSERT_BTC_READ,
  SELECT_AVG_PRICE,
} from "./config/queries.js";

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "usd",
});
console.log("aqui é o dados do moneyFormatter", moneyFormatter);

let counter = 1;
const db = await openDB();
await db.exec(CREATE_TABLE_BTC_VALUE);

coinEmitter.on("btc_read", async (pricee) => {
  const read_time = new Date().toISOString();
  const price = moneyFormatter.format(pricee);
  console.log(`Preço do Bitcoin em ${read_time} -> U$ ${price}`);

  const timesNow = Date.now();
  const id = parseInt(`${timesNow}${counter}`);

  //aqui toda a lógica
  await db.run(INSERT_BTC_READ, id, read_time, price);
  let dataTable = await db.all(SELECT_AVG_PRICE);

  const prices = dataTable.map((e) => {
    const numericString = e.price.replace(/[^0-9.,]/g, "");
    return parseFloat(numericString);
  });
  const uniquePrices = new Set(prices);
  const resultSum = [...uniquePrices].reduce((acc, price) => acc + price, 0);
  const resultPrice = resultSum / uniquePrices.size;

  console.log(`Preço médio - US$ ${resultPrice.toFixed(5)}`);
});

//fazer um codigo para dar insert no último valor da moeda
//fazer um codigo pra retornar o valor medio
//não contabilizar os valores repetidos na hora da conta
