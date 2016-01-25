const React = require('react-native')

const {
  Component,
  StyleSheet,
  Text,
  View,
} = React

export default class LocationDetail extends Component {
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,

  }
});
