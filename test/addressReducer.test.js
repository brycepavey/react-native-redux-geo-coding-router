GLOBAL.__DEV__ = true
require("babel-register")({
 // This will override `node_modules` ignoring - you can alternatively pass
 // an array of strings to be explicitly matched or a regex / glob
 ignore: false
});

const React = require('react-native')
const { ListView } = React
const expect = require('expect')
const reducer = require('../src/reducers/addressReducer')

describe('address reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([
      {
        locations: dataSource.cloneWithRows([]),
        isLoading: false,
        searchString: '158 city road'
      }
    ])
  })
})
