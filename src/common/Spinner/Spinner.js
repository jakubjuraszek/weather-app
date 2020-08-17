import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ wrapperClassName }) => {
  return (
    <div className={wrapperClassName}>
      <div className="spinner" />
    </div>
  );
};

Spinner.propTypes = {
  wrapperClassName: PropTypes.string,
};

Spinner.defaultProps = {
  wrapperClassName: '',
};

export default Spinner;
