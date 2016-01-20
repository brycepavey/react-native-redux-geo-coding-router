const configureMockStore = require('redux-mock-store')
const thunk = require('redux-thunk')
const actions = require('../src/actions/locationActions')
const nock = require('nock')
const expect = require('expect');

require('es6-promise').polyfill();
require('isomorphic-fetch');

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('locationActions tests', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVE_LOCATION when fetching location has been done', (done) => {
    nock('https://maps.googleapis.com/')
    .get('/maps/api/geocode/json?&encoding=json&address=158+city+road')
    .reply(200, {
                    "results":[{
                      "formatted_address": '158 Citsy Rd, FakeCity, MS 39582, USA',
                      "geometry":{
                        "location":{
                          "lat": '30.68',
                          "lng": '62.52'
                        }
                      }
                    }]
                })

    const expectedActions = [
      { type: actions.REQUEST_LOCATION, isLoading: true },
      { type: actions.RECEIVE_LOCATION,
        locations: [["158 Citsy Rd, FakeCity, MS 39582, USA", "30.68", "62.52"]],
       isLoading: false }]
    const store = mockStore({}, expectedActions, done)
    store.dispatch(actions.updateLocation('158 city road'))
  })



  it('receives the location json from the request callback', () => {
    const json = {
                    "results":[{
                      "formatted_address": '158 City Rd, FakeCity, MS 39582, USA',
                      "geometry":{
                        "location":{
                          "lat": '30.68',
                          "lng": '62.52'
                        }
                      }
                    }]
                }

    const expectedLocations = [["158 City Rd, FakeCity, MS 39582, USA", "30.68", "62.52"]]
    const isLoading = false

    const expectedAction = {
      type: actions.RECEIVE_LOCATION,
      locations: expectedLocations,
      isLoading: isLoading
    }
    expect(actions.receiveLocation(json)).toEqual(expectedAction)
  })



  it('sets loading status true whilst performing web request', () => {
    const expectedAction = {
      type: actions.REQUEST_LOCATION,
      isLoading: true
    }
    expect(actions.requestLocation()).toEqual(expectedAction)
  })



  it('updates the search string when value changes', () => {
    const searchString = '200 City Road'

    const expectedAction = {
      type: actions.SET_SEARCH_STRING,
      searchString: searchString
    }
    expect(actions.setSearchString(searchString)).toEqual(expectedAction)
  })
})
