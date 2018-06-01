import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import * as routes from '../constants/routes';


const MainLayout = (props) => {
    return (
        <div className="main-content">
            {/* <Route exact path={routes.LANDING} component={() => <Landing />} /> */}
        </div>
    )
};

MainLayout.propTypes = {
};

const mapStateToProps = state => ({
  loggedInUser: state.user
});

export default withRouter(connect(mapStateToProps)(MainLayout));
