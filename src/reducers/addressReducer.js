
GLOBAL.__DEV__ = true
require("babel-register")({
 // This will override `node_modules` ignoring - you can alternatively pass
 // an array of strings to be explicitly matched or a regex / glob
 ignore: false
});

var React = require('react-native');
const { ListView } = React;
const {
  RECEIVE_LOCATION,
  SET_SEARCH_STRING,
  REQUEST_LOCATION
} = require('../actions/locationActions')
const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

const initialState = {
  locations: dataSource.cloneWithRows([]),
  isLoading: false,
  searchString: '158 city road'
}

function location(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOCATION:
      return {
        ...state,
        isLoading: action.isLoading
      };
      case RECEIVE_LOCATION:
        return {
          ...state,
          locations:      dataSource.cloneWithRows(action.locations),
          isLoading:     false
        };
      case SET_SEARCH_STRING:
        return {
          ...state,
          searchString:   action.searchString
        }
      default:
        return state;
    }
}

module.exports = location
