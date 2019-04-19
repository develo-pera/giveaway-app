import axios from 'axios'

import { API_ROUTES, FACEBOOK_API_BASE_URL } from '../../routing/ApiRoutes';
import ACTION_TYPES from './select-profile.actionTypes'

const dispatchFetchUserProfilesInProgess = () => ({
  type: ACTION_TYPES.FETCH_USERS_INSTAGRAM_PROFILES_IN_PROGRESS,
})

const getConnectedInstagramAccountsIds = async () => {
  try {
    const response = axios({
      method: 'GET',
      url: API_ROUTES.GET_CONNECTED_INSTAGRAM_ACCOUNTS,
    })
    const { data: { data: facebookPages } } = await response

    return facebookPages
      .filter(facebookPage => facebookPage.connected_instagram_account)
      .map(facebookPageWithIG => facebookPageWithIG.connected_instagram_account.id)
  } catch (e) {
    return console.error(e)
  }
}

const getInstagramProfileData = async (id) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${FACEBOOK_API_BASE_URL}/${id}`,
      params: {
        fields: 'ig_id,username,name,profile_picture_url,followers_count,follows_count',
      },
    })
    const { data } = await response
    return data
  } catch (e) {
    return console.error(e);
  }
}

const getUserInstagramProfiles = () => async (dispatch) => {
  dispatch(dispatchFetchUserProfilesInProgess());

  const connectedIGAccounts = await getConnectedInstagramAccountsIds()
  const IGAccounts = await Promise.all(
    connectedIGAccounts.map(ig => getInstagramProfileData(ig))
  )

  dispatch({
    type: ACTION_TYPES.FETCH_USERS_INSTAGRAM_PROFILES_SUCCESS,
    payload: IGAccounts,
  })
}

export default getUserInstagramProfiles
