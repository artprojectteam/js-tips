/**
 * url parameter
 * @return {{}}
 */
export default () => {
  const search = window.location.search
  const res = {}

  if (search.length > 1) {
    const query = search.substring(1) // remove to '?'
    const params = query.split('&')

    for (let i = 0, iLen = params.length; i < iLen; i++) {
      const obj = params[i].split('=')
      const key = decodeURIComponent(obj[0])
      res[key] = decodeURIComponent(obj[1])
    }
  }

  return res
}