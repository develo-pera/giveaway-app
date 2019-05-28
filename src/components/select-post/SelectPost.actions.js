import axios from 'axios'

import { FACEBOOK_API_BASE_URL } from '../../routing/ApiRoutes'
import ACTION_TYPES from './SelectPost.actionTypes'

const dispatchFetchInstagramPhotosInProgress = () => ({
  type: ACTION_TYPES.FETCH_USERS_INSTAGRAM_PHOTOS_IN_PROGRESS,
})

const dispatchFetchInstagramPhotosSuccess = photos => ({
  type: ACTION_TYPES.FETCH_USERS_INSTAGRAM_PHOTOS_SUCCESS,
  payload: photos,
})

export const getInstagramPhotosForProfileWithId = id => async (dispatch) => {
  dispatch(dispatchFetchInstagramPhotosInProgress())

  const response = await axios({
    method: 'GET',
    url: `${FACEBOOK_API_BASE_URL}/${id}/media`,
    params: {
      fields: 'thumbnail_url,media_url,id',
      limit: '24',
    },
  })
  const { data: { data: photos } } = await response

  dispatch(dispatchFetchInstagramPhotosSuccess(photos));
}


export const selectPhotoWithId = id => ({
  type: ACTION_TYPES.SELECT_PHOTO_WITH_ID,
  payload: {
    id,
  },
})
