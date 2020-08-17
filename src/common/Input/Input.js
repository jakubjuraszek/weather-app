import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Input = ({ id, onChange, name, type, value, placeholder, autoComplete, className }) => {
  const classNames = cx('input', { [className]: className });
  return (
    <>
      <input
        className={classNames}
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  className: '',
  placeholder: '',
  autoComplete: 'off',
};

export default Input;
