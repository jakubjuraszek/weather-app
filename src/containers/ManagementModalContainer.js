import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ManagementModal from '../components/ManagementModal/ManagementModal';

import * as weatherActionCreators from '../actions/weatherActions';

const ManagementModalContainer = ({ linkedCities, weatherActions, manegamentModalIsOpen }) => {
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
      show={manegamentModalIsOpen}
      onHide={weatherActions.toggleManagementModal}
    />
  );
};

const mapStateToProps = state => ({
  manegamentModalIsOpen: state.weather.manegamentModalIsOpen,
  linkedCities: state.weather.linkedCities,
});

const mapDispatchToProps = dispatch => ({
  weatherActions: bindActionCreators(weatherActionCreators, dispatch),
});

ManagementModalContainer.propTypes = {
  manegamentModalIsOpen: PropTypes.bool,
  linkedCities: PropTypes.arrayOf(PropTypes.string).isRequired,
  weatherActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

ManagementModalContainer.defaultProps = {
  manegamentModalIsOpen: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagementModalContainer);
