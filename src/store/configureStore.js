const { createStore, applyMiddleware } = require('redux')
const thunk = require('redux-thunk')
const reducer = require('../reducers')
import createLogger from 'redux-logger';

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore)

module.exports = function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)
  return store
}
