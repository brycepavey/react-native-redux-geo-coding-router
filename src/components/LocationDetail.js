const React = require('react-native')
var Actions = require('react-native-router-flux').Actions;

const {
  Component,
  StyleSheet,
  Text,
  View,
} = React

class LocationDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
          <Text>
            Latitude: {this.props.lat}
          </Text>
          <Text>
            Longitude: {this.props.lng}
          </Text>
      </View>
    )
  }
}

module.exports = LocationDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,

  }
});
