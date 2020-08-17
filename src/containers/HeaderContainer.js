import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as weatherActionCreators from '../actions/weatherActions';
import Header from '../components/Header/Header';

const HeaderContailer = ({ weatherActions }) => {
  return <Header handleManagementModal={weatherActions.toggleManagementModal} />;
};

const mapDispatchToProps = dispatch => ({
  weatherActions: bindActionCreators(weatherActionCreators, dispatch),
});

HeaderContailer.propTypes = {
  weatherActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(null, mapDispatchToProps)(HeaderContailer);
