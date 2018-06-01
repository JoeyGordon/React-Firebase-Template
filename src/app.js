import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from "prop-types";

import './app.css';
import LoadingScreen from './components/loadingScreen';
import MainLayout from './components/mainLayout';
import ScrollToTop from './scrollToTop';
import withUserAuthedAndLoaded from './withUserAuthedAndLoaded';

class App extends Component {
  componentWillMount() {
    // you can use these actions to show and hide a loading screen
    // this.props.dispatch(loadingActions.startLoading());
    // this.props.dispatch(loadingActions.stopLoading());
  }

  render() {
    if (this.props.loading && this.props.loading.isLoading) {
      return <LoadingScreen />
    }
    return (
      <Router className="App">
        <ScrollToTop>
          <MainLayout />
        </ScrollToTop>
      </Router>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

const mapStateToProps = state => ({
  loading: state.loading
});

export default connect(mapStateToProps)(withUserAuthedAndLoaded(App));