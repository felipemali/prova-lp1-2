import { coinEmitter } from './emitters/coin_emitter.js'

console.log('Iniciando leituras...')

/**
 * Formatador capaz de formatar um número
 * no padrão de moeda brasileiro.
 */
const moneyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'usd',
})

/**
 * Listener que é acionado toda vez que
 * o coin emitter emite o preço atual
 * do Bitcoin.
 */
coinEmitter.on('btc_read', (price) => {
  const time = new Date().toISOString()
  const formattedPrice = moneyFormatter.format(price)
  console.log(`Preço do Bitcoin em ${time} -> U$ ${formattedPrice}`)

  /**
   * Abaixo, crie o código necessário para salvar
   * o novo preço lido do Bitcoin na tabela btc_value.
   * Após, crie o código necessário para executar uma
   * consulta na tabela btc_value que retorne o valor
   * médio do Bitcoin desde a primeira leitura.
   */
})

/**
 * Observação final:
 *
 * Implemente este script de tal forma que,
 * caso ele seja interrompido e posteriormente
 * executado novamente, não haja problemas
 * de conflito de chaves primárias na tabela
 * btc_value.
 */
