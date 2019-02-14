const parseTokenValuesFromHash = (hashString) => {
  const parsedValues = {}
  hashString.split('&').forEach((parametar) => {
    const [key, value] = parametar.split('=');
    parsedValues[key] = value
  })
  return parsedValues
}

const saveFacebookAccessTokenToLocalStorage = (locationHash) => {
  /* eslint-disable */
  const {
    access_token,
    data_access_expiration_time,
    expires_in
  } = parseTokenValuesFromHash(locationHash)
  /* eslint-enable */
  const tokenObjectJSON = JSON.stringify({
    access_token,
    data_access_expiration_time,
    expires_in,
  })
  localStorage.setItem('fbToken', tokenObjectJSON)
}

export default saveFacebookAccessTokenToLocalStorage
