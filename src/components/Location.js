const React = require('react-native')
var Actions = require('react-native-router-flux').Actions;

const {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React

class Location extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight style={styles.button}
                            underlayColor='#99d9f4'
                            onPress={()=>Actions.locationDetail({lat: this.props.lat, lng: this.props.lng})}>
          <Text>
            {this.props.address}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Location

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5
  }
});
