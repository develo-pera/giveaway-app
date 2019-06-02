import axios from 'axios';

import ACTION_TYPES from './Results.actionTypes';
import { FACEBOOK_API_BASE_URL } from '../../routing/ApiRoutes';

const dispatchFetchInstagramPhotoInProgress = () => ({
  type: ACTION_TYPES.FETCH_INSTAGRAM_PHOTO_DATA_IN_PROGRESS,
})

const getCommentsForPhotoWithId = async (id, after, comments) => {
  let commentsArray = comments || []
  const params = {
    fields: 'id,username,text,replies',
  }
  if (after) {
    params.after = after
  }

  try {
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
  } catch (e) {
    console.log(e)
  }
  return commentsArray
}

const getDataForPhotoWithId = async (id, rules) => {
  const data = {}

  if (rules.winnersNeedToLeaveAComment) {
    data.comments = await getCommentsForPhotoWithId(id)
  }

  return data
}

const pickWinnersWhoSatisfyRules = (id, rules) => async (dispatch) => {
  dispatch(dispatchFetchInstagramPhotoInProgress())

  const data = await getDataForPhotoWithId(id, rules);

  dispatch({
    type: ACTION_TYPES.FETCH_INSTAGRAM_PHOTO_DATA_SUCCESS,
    payload: data,
  })

  console.log(data)
}

export default pickWinnersWhoSatisfyRules
