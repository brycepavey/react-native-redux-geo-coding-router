
const React = require('react-native');
const { Text, View, TouchableWithoutFeedback } = React;
const LocationDetail = require('../src/components/LocationDetail').default;

const shallowHelpers = require('react-shallow-renderer-helpers');
const shallowRenderer = shallowHelpers.createRenderer();

describe('LocationDetail', function() {
  it('should render LocationDetail component', () => {
      shallowRenderer.render(() => <LocationDetail />);
      let output = shallowRenderer.getRenderOutput();

      expect(output.type).toBe(View);
  });
});
