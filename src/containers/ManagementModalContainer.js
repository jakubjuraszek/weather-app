import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ManagementModal from '../components/ManagementModal/ManagementModal';

import * as weatherActionCreators from '../actions/weatherActions';

const ManagementModalContainer = ({ linkedCities, weatherActions, managementModalIsOpen }) => {
  const onSubmit = (e, values) => {
    e.preventDefault();
    const updatedCities = Object.values(values);
    weatherActions.updateLinkedCities(updatedCities);
    weatherActions.toggleManagementModal();
  };

  return (
    <ManagementModal
      onSubmit={onSubmit}
      linkedCities={linkedCities}
      show={managementModalIsOpen}
      onHide={weatherActions.toggleManagementModal}
    />
  );
};

const mapStateToProps = state => ({
  managementModalIsOpen: state.weather.managementModalIsOpen,
  linkedCities: state.weather.linkedCities,
});

const mapDispatchToProps = dispatch => ({
  weatherActions: bindActionCreators(weatherActionCreators, dispatch),
});

ManagementModalContainer.propTypes = {
  managementModalIsOpen: PropTypes.bool,
  linkedCities: PropTypes.arrayOf(PropTypes.string).isRequired,
  weatherActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

ManagementModalContainer.defaultProps = {
  managementModalIsOpen: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagementModalContainer);
