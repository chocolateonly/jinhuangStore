const langPackage={
  unauthorized:'unauthorized',
  gatewayTimeout:'gateway Timeout'
}
const { unauthorized, gatewayTimeout } = langPackage
const defaultConfig = {
  headers: { 'Content-Type': 'application/json; charset=UTF-8'},
}
const { headers } = defaultConfig

export async function Post (url, body, options = {}) {
  try {
    let res = await fetch(url, {
      method: 'POST',
      headers: { ...headers, ...options },
      body,
    })
    return await handleRes(res)
  } catch (e) {
    throw e.toString()
  }
}

export async function Get (url, options = {}) {
  try {
    let res = await fetch(url, {
      method: 'GET',
      headers: { ...headers, ...options },
    })
    return await handleRes(res)
  } catch (e) {
    throw e.toString()
  }

}

export async function Put (url, body, options = {}) {
  try {
    let res = await fetch(url, {
      method: 'PUT',
      headers: { ...headers, ...options },
      body,
    })
    return await handleRes(res)
  } catch (e) {
    throw e.toString()
  }
}

export async function Delete (url, options = {}) {
  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: { ...headers, ...options },
    })
    return await handleRes(res)
  } catch (e) {
    throw e.toString()
  }

}

async function handleRes (res) {
  if (res.status === 401) throw unauthorized
  if (res.status === 504) throw gatewayTimeout
  const result = await res.json()
  if (res.ok) return result
  throw result.error.msg
}
