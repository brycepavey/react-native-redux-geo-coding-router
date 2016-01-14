const React = require('react-native');
const { bindActionCreators }  = require ('redux')
const { connect } = require ('react-redux/native')
const Routing = require('../containers/Routing')
const locationActions = require('../actions/locationActions')
const routerActions = require('../actions/routerActions')

const mapStateToProps = state => ({
    routerState:    state.router.routerState
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions,
  }, dispatch),
  dispatch
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Routing.bind(this))
