'use strict'
const Location = require('./Location')
const React = require('react-native');
var Actions = require('react-native-router-flux').Actions;


const {
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

class GeoLocationSearch extends React.Component {
  constructor(props) {
    super(props)
    this._executeQuery = this._executeQuery.bind(this)
    this.onSearchTextChanged = this.onSearchTextChanged.bind(this)
  }

  renderRow(rowData) {
    return (
      <Location
        address={rowData[0]}
        lat={rowData[1]}
        lng={rowData[2]}
      />
    )
  }

  onSearchTextChanged(event) {
    console.log(this.props)
    this.props.actions.setSearchString(event.nativeEvent.text.trim().split(' ').join('+'))
  }

  _executeQuery() {
    this.props.actions.updateLocation(this.props.searchString)
  }

  render() {
    var spinner = this.props.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='true'
          size='large'/> ) :
      ( <View/> );

    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search Location
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.props.searchString}
            onChange={this.onSearchTextChanged}
            placeholder='Search via address'
          />
          <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'>
            <Text
              style={styles.buttonText}
              onPress={this._executeQuery}>
              Go
            </Text>
          </TouchableHighlight>
        </View>
        {spinner}
        <View>
          <ListView
            dataSource={this.props.locations}
            renderRow={this.renderRow}
          />
        </View>
      </View>
    )
  }
}
module.exports = GeoLocationSearch;


var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  }
});
