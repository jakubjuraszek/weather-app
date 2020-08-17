import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({ show, onClick }) =>
  show ? <div className="backdrop" onClick={onClick} /> : null;

Backdrop.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
};

Backdrop.defaultProps = {
  show: false,
  onClick: () => {},
};

export default Backdrop;
