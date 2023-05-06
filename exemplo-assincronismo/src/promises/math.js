const API_URL = 'https://api.isevenapi.xyz/api/iseven'

export const isEven = (number) => {
  return new Promise((resolve, reject) => {
    if (isNaN(number)) {
      reject({ error: 'Invalid number' })
    } else {
      fetch(`${API_URL}/${number}`)
        .then((response) => {
          response.json().then((result) => {
            const { iseven } = result
            resolve(iseven)
          })
        })
        .catch((error) => reject({ error }))
    }
  })
}

// Async/Await
export const isEven2 = async (number) => {
  console.log('Entrou')
  if (isNaN(number)) {
    console.log('Saiu')
    return { error: 'Invalid number' }
  }

  const response = await fetch(`${API_URL}/${number}`)
  const result = await response.json()
  const { iseven } = result

  console.log('Saiu')
  return iseven
}
