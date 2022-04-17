import { combineReducers, createStore, applyMiddleware } from 'redux'
import gridReducer from '../features/Grid/reducer'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
  grid: gridReducer // <--- berikan nama state untuk reducer `gridReducer`, misalnya `grid`
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store
