import axios from 'axios';

import ACTION_TYPES from './Results.actionTypes';
import { FACEBOOK_API_BASE_URL } from '../../routing/ApiRoutes';

const dispatchFetchInstagramPhotoCommentsInProgress = () => ({
  type: ACTION_TYPES.FETCH_INSTAGRAM_PHOTO_DATA_IN_PROGRESS,
})

const getCommentsForPhotoWithId = async (id, after, comments) => {
  console.log('ID =', id)
  console.log(id)
  let commentsArray = comments || []
  const params = {
    fields: 'id,username,text,replies',
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

const getDataForPhotoWithId = id => async (dispatch) => {
  dispatch(dispatchFetchInstagramPhotoCommentsInProgress())
  console.log(id);
  const comments = await getCommentsForPhotoWithId(id)

  dispatch({
    type: ACTION_TYPES.FETCH_INSTAGRAM_PHOTO_DATA_SUCCESS,
    payload: comments,
  })
}

export default getDataForPhotoWithId
