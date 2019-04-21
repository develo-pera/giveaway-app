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

const dispatchFetchInstagramPhotoCommentsInProgress = () => ({
  type: ACTION_TYPES.FETCH_INSTAGRAM_PHOTO_DATA_IN_PROGRESS,
})

const getCommentsForPhotoWithId = async (id, after, comments) => {
  let commentsArray = comments || []
  const params = {
    fields: 'id,username,text',
  }
  if (after) {
    params.after = after
  }
  const response = await axios({
    method: 'GET',
    url: `${FACEBOOK_API_BASE_URL}/${id}/comments`,
    params,
  })

  const { data: { data: fetchedComments, paging } } = await response
  commentsArray = commentsArray.concat(fetchedComments)

  if (paging) {
    return getCommentsForPhotoWithId(id, paging.cursors.after, commentsArray)
  }

  return commentsArray
}

export const getDataForPhotoWithId = id => async (dispatch) => {
  dispatch(dispatchFetchInstagramPhotoCommentsInProgress())

  const comments = await getCommentsForPhotoWithId(id)

  dispatch({
    type: ACTION_TYPES.FETCH_INSTAGRAM_PHOTO_DATA_SUCCESS,
    payload: comments,
  })
}
