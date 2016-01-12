var actions = exports = module.exports

exports.UPDATE_LOCATION = 'UPDATE_LOCATION'
exports.RECEIVE_LOCATION = 'RECEIVE_LOCATION'
exports.REQUEST_LOCATION = 'REQUEST_LOCATION'
exports.SET_SEARCH_STRING = 'SET_SEARCH_STRING'


exports.setSearchString = function setSearchString(searchString) {
  return {
    type: actions.SET_SEARCH_STRING,
    searchString: searchString
  }
}

exports.updateLocation = function updateLocation(address) {
  var query = `https://maps.googleapis.com/maps/api/geocode/json?&encoding=json&address=${address.trim().split(' ').join('+')}`
  console.log(query)

  return dispatch => {
    dispatch(requestLocation())
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?&encoding=json&address=${address}`)
      .then((response) => response.json())
      .then(json => dispatch(receiveLocation(json)))
  }
}

function requestLocation() {
  return {
    type: actions.REQUEST_LOCATION,
    isLoading: true
  }
}

function receiveLocation(json) {
  var locations = []
  for(var i = 0; i < json.results.length; i++){
      locations.push([json.results[i].formatted_address, json.results[i].geometry.location.lat, json.results[i].geometry.location.lng])
  }

  return {
    type: actions.RECEIVE_LOCATION,
    locations: locations,
    isLoading: false,
  }
}
