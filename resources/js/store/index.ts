import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import loading from './loading/reducers'

const rootReducer = combineReducers({
  loading,
})
export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancers = composeWithDevTools({
  trace: true,
})
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
    ),
  ),
)


export default store
