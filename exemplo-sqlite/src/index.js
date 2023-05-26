import { openDB } from './config/db.js'
import { SELECT_BY_ID, SELECT_BY_NAME } from './config/queries.js'
;(async () => {
  const db = await openDB()
  const results = await db.all(SELECT_BY_NAME, '%roberto%')
  console.log(results)

  console.log(`${results.length} resultados encontrados`)

  const id = 557
  const contact = await db.get(SELECT_BY_ID, id)
  console.log(contact)
})()
