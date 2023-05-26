import { fakerPT_BR as faker } from '@faker-js/faker'
import { openDB } from './config/db.js'
import { CREATE_TABLE, INSERT_CONTACT } from './config/queries.js'

const NUM_ROWS = 1000

// IIFE (Immediately Invoked Function Expression)
;(async () => {
  const db = await openDB()
  await db.exec(CREATE_TABLE)

  for (let i = 0; i < NUM_ROWS; i++) {
    const id = i + 1
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const name = `${firstName} ${lastName}`
    const email = faker.internet.email({
      firstName,
      lastName,
    })
    const phone = faker.phone.number('(##) #####-####')

    await db.run(INSERT_CONTACT, id, name, email, phone)

    console.log(`Contato #${id} criado`)
    console.log({ name, email, phone })
  }

  console.log('Mal feito desfeito')
})()
