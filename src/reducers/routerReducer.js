var React = require('react-native');
const {
  ON_PUSH,
  ON_POP
} = require('../actions/routerActions')

const initialState = {
  stateChange: [{state:"", action:""}]
}

function router(state = initialState, action) {
  switch (action.type) {
    case ON_PUSH:
      return {
        ...state,
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
