import axios from 'axios'
import { gamesDetailsURL, gamesScreenshotURL } from '../api'

export const loadDetail = id => async dispatch => {
  const detailData = await axios.get(gamesDetailsURL(id))
  const screenshotData = await axios.get(gamesScreenshotURL(id))
  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  })
}
