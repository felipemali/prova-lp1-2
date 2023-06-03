import { openDB } from './config/db.js'
import {
  CREATE_TABLE_ESPECIE,
  CREATE_TABLE_ESPECIME,
  INSERT_ESPECIE,
  INSERT_ESPECIME,
  TRUNCATE_ESPECIE,
  TRUNCATE_ESPECIME,
} from './config/queries.js'

const especies = [
  {
    id: 1,
    nomeCientifico: 'Panthera onca',
    nomePopular: 'Onça-Pintada',
    habitat: 'florestas tropicais, pantanal, cerrado',
    familia: 'Felídeos',
    ordem: 'Carnivora',
  },
  {
    id: 2,
    nomeCientifico: 'Chrysocyon brachyurus',
    nomePopular: 'Lobo-Guará',
    habitat: 'pantanal, cerrado',
    familia: 'Canídeos',
    ordem: 'Carnivora',
  },
  {
    id: 3,
    nomeCientifico: 'Hydrochoerus hydrochaeris',
    nomePopular: 'Capivara',
    habitat: 'rios, lagos e pântanos',
    familia: 'Caviidae',
    ordem: 'Rodentia',
  },
]

const especimes = [
  {
    id: 1,
    numeroSerie: 'EPC001-1',
    apelido: 'Pintadinha',
    idEspecie: 1,
  },
  {
    id: 2,
    numeroSerie: 'EPC002-1',
    apelido: 'Gatão',
    idEspecie: 1,
  },
  {
    id: 3,
    numeroSerie: 'EPC001-2',
    apelido: 'Laranjinha',
    idEspecie: 2,
  },
  {
    id: 4,
    numeroSerie: 'EPC002-2',
    apelido: 'Romualdo',
    idEspecie: 2,
  },
  {
    id: 5,
    numeroSerie: 'EPC001-3',
    apelido: 'Antonieta',
    idEspecie: 3,
  },
  {
    id: 6,
    numeroSerie: 'EPC002-3',
    apelido: 'Dentinho',
    idEspecie: 3,
  },
]

;(async () => {
  const db = await openDB()
  await db.exec(CREATE_TABLE_ESPECIE)
  await db.exec(CREATE_TABLE_ESPECIME)

  await db.exec(TRUNCATE_ESPECIME)
  await db.exec(TRUNCATE_ESPECIE)

  for (let i = 0; i < especies.length; i++) {
    const { id, nomeCientifico, nomePopular, habitat, familia, ordem } =
      especies[i]

    console.log({ id, nomeCientifico, nomePopular, habitat, familia, ordem })

    await db.run(
      INSERT_ESPECIE,
      id,
      nomeCientifico,
      nomePopular,
      habitat,
      familia,
      ordem
    )

    console.log(`Espécie #${i + 1} criada`)
  }

  for (let i = 0; i < especimes.length; i++) {
    const { id, numeroSerie, apelido, idEspecie } = especimes[i]

    console.log({
      id,
      numeroSerie,
      apelido,
      idEspecie,
    })

    await db.run(INSERT_ESPECIME, id, numeroSerie, apelido, idEspecie)
    console.log(`--> Espécime #${i + 1} criada`)
  }

  console.log('Mal feito desfeito')
})()
