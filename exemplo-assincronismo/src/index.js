import { isEven2 } from './promises/math.js'

// isEven2(34)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))

// isEven2('banana')
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))

/***************************************/

// const run = async () => {
//   let result = await isEven2(34)
//   console.log(result)

//   result = await isEven2('banana')
//   console.log(result)
// }

// run()

/***************************************/

// IIFE (Immediately Invoked Function Expression)
;(async () => {
  let result = await isEven2(34)
  console.log(result)

  result = await isEven2('banana')
  console.log(result)
})()
