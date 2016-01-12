const React = require('react-native');
const {AppRegistry, Navigator, StyleSheet,Text,View} = React;
const { bindActionCreators }  = require ('redux')
const { connect } = require ('react-redux/native')
const GeoLocationSearch = require('../components/GeoLocationSearch')
const LocationDetail = require('../components/LocationDetail')
const locationActions = require('../actions/locationActions')
var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');


const mapStateToProps = state => ({
    locations:      state.location.locations,
    isLoading:     state.location.isLoading,
    searchString:  state.location.searchString
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...locationActions,
  }, dispatch),
  dispatch
});

class App extends React.Component {
    render() {
        return (
            <Router hideNavBar={true} >
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>

                <Route name="geoLocationSearch" component={connect(mapStateToProps, mapDispatchToProps)(GeoLocationSearch)} title="Geo Location Search" hideNavBar={false} initial={true}/>
                <Route name="locationDetail" component={(LocationDetail)} title="Location Detail"/>
            </Router>
        );
    }
}

module.exports = App
