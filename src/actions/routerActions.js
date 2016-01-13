var actions = exports = module.exports

exports.onPush = function onPush(){
  return {
    type: actions.ON_PUSH,
  }
}

exports.onPop = function onPop(){
  return {
    type: actions.ON_POP,
  }}

// exports.setSearchString = function setSearchString(searchString) {
//   return {
//     type: actions.SET_SEARCH_STRING,
//     searchString: searchString
//   }
// }
//
// exports.updateLocation = function updateLocation(address) {
//   var query = `https://maps.googleapis.com/maps/api/geocode/json?&encoding=json&address=${address.trim().split(' ').join('+')}`
//   console.log(query)
//
//   return dispatch => {
//     dispatch(requestLocation())
//     return fetch(`https://maps.googleapis.com/maps/api/geocode/json?&encoding=json&address=${address}`)
//       .then((response) => response.json())
//       .then(json => dispatch(receiveLocation(json)))
//   }
// }
//
// function requestLocation() {
//   return {
//     type: actions.REQUEST_LOCATION,
//     isLoading: true
//   }
// }
//
// function receiveLocation(json) {
//   var locations = []
//   for(var i = 0; i < json.results.length; i++){
//       locations.push([json.results[i].formatted_address, json.results[i].geometry.location.lat, json.results[i].geometry.location.lng])
//   }
//
//   return {
//     type: actions.RECEIVE_LOCATION,
//     locations: locations,
//     isLoading: false,
//   }
// }
