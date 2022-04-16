import { combineReducers, createStore } from 'redux'
import gridReducer from '../features/Grid/reducer'

const rootReducers = combineReducers({
  grid: gridReducer // <--- berikan nama state untuk reducer `gridReducer`, misalnya `grid`
})

const store = createStore(rootReducers)

export default store
