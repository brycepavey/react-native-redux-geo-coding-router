var actions = exports = module.exports

exports.ON_PUSH = 'ON_PUSH'
exports.ON_POP = 'ON_POP'

exports.onPush = function onPush(route, routerState){
  return {
    type: actions.ON_PUSH,
    route: route,
    routerState: routerState
  }
}

exports.onPop = function onPop(routerState){
  return {
    type: actions.ON_POP,
    routerState: routerState
  }}
