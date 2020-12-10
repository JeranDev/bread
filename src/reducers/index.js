import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import detailReducer from './detailReducer'
import detailsReducer from './detailReducer'

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailsReducer,
})

export default rootReducer
