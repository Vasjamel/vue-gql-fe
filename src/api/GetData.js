const AuthHeader = localStorage.getItem(import.meta.env.VITE_API_TOKEN)

function callApi({ query = '', variables = {} }) {
  return fetch(import.meta.env.VITE_API_URL, {
    method: 'POST',
    body: JSON.stringify({ query, variables }),
    headers: { Authorization: AuthHeader, 'Content-Type': 'application/json' },
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      if (data.errors) {
        console.error('Errors', data.errors)
        return data.errors
      }
      return data.data
    })
    .then((data) => data)
}

export default callApi
