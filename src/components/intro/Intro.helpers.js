const parseTokenValuesFromHash = (hashString) => {
  const parsedValues = {}
  hashString.split('&').forEach((parametar) => {
    const [key, value] = parametar.split('=');
    // Because first value in returned url is #acces_token
    // and has a hash symbol as a first character
    // we remove it with replace string method
    parsedValues[key.replace('#', '')] = value
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
