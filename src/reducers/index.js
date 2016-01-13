const { combineReducers } = require('redux')
const location = require('./addressReducer')
const router = require('./routerReducer')

const rootReducer = combineReducers({
  location,
  router
})

module.exports = rootReducer
