const expect = require('expect');
const actions = require('../src/actions/routerActions')

describe('routerActions tests', () => {
  it('creates an action to push a new scene', () => {
    const route = 'locationDetail'
    const routerState = ['geoLocationSearch']

    const expectedAction = {
      type: actions.ON_PUSH,
      route: route,
      routerState: routerState
    }
    expect(actions.onPush(route, routerState)).toEqual(expectedAction)
  })




  it('creates an action to pop the current scene', () => {
    const route = 'locationDetail'
    const routerState = ['geoLocationSearch', 'locationDetail']

    const expectedAction = {
      type: actions.ON_POP,
      routerState: routerState
    }
    expect(actions.onPop(routerState)).toEqual(expectedAction)
  })
})
