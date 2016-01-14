var React = require('react-native');
const {
  ON_PUSH,
  ON_POP
} = require('../actions/routerActions')

const initialState = {
  routerState: ["geoLocationSearch", "locationDetail", "geoLocationSearch"]
}

function router(state = initialState, action) {
  switch (action.type) {
    case ON_PUSH:
      return {
        ...state,
        routerState: action.route
      };
      case ON_POP:
        return {
          ...state,
        };
      default:
        return state;
    }
}

module.exports = router
