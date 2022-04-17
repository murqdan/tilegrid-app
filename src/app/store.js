import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import gridReducer from '../features/Grid/reducer'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
  grid: gridReducer // <--- berikan nama state untuk reducer `gridReducer`, misalnya `grid`
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))

export default store
