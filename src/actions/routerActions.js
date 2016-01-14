var actions = exports = module.exports

exports.ON_PUSH = 'ON_PUSH'
exports.ON_POP = 'ON_POP'

exports.onPush = function onPush(route){
  return {
    type: actions.ON_PUSH,
    route: route
  }
}

exports.onPop = function onPop(){
  return {
    type: actions.ON_POP,
  }}
