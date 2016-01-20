const configureMockStore = require('redux-mock-store')
const thunk = require('redux-thunk')
const actions = require('../src/actions/locationActions')
const nock = require('nock')

require('es6-promise').polyfill();
require('isomorphic-fetch');

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async update location', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVE_LOCATION when fetching location has been done', (done) => {
    nock('https://maps.googleapis.com/')
    .get('/maps/api/geocode/json?&encoding=json&address=158+city+road')
    .reply(200, { "results" : [
                            {
                                "formatted_address" : "151 City Rd, Perkinston, MS 39573, USA",
                                "place_id" : "EiYxNTEgQ2l0eSBSZCwgUGVya2luc3RvbiwgTVMgMzk1NzMsIFVTQQ"
                            },
                            {
                                "formatted_address" : "151 City Rd, Merewether NSW 2291, Australia",
                                "place_id" : "ChIJd7qPws0Vc2sR6PJg_RBLdwg"
                            }
                        ],
                        "status" : "OK"
                    })

    const expectedActions = [
      { type: actions.REQUEST_LOCATION, isLoading: true },
      { type: actions.RECEIVE_LOCATION,
        locations: {"results":{
                      "formatted_address": '158 City Rd, FakeCity, MS 39582, USA',
                      "geometry":{
                        "location":{
                          "lat": '30.68',
                          "lng": '6'
                        }
                      }
                    }
                  },
       isLoading: false }]
    const store = mockStore({}, expectedActions, done())
    store.dispatch(actions.updateLocation('158 city road'))
  })
})
