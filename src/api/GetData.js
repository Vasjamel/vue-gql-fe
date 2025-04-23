const AuthHeader = localStorage.getItem('B-Auth-Token')

const apiUrl = 'http://localhost:3333'

function callApi({ query = '', variables = {} }) {
  return fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ query, variables }),
    headers: { Authorization: AuthHeader, 'Content-Type': 'application/json' },
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log('fetched data', data.data)
      if (data.errors) {
        console.error('Errors', data.errors)
        return data.errors
      }
      return data.data
    })
    .then((data) => data)
}

export default callApi
