import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ children, className, onClick, disabled, type, btnType, icon }) => {
  const classNames = cx(`btn btn__${btnType}`, { [className]: className });
  /* eslint-disable react/button-has-type */
  return (
    <button className={classNames} type={type} disabled={disabled} onClick={onClick}>
      {icon && (
        <span className="btn__icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  btnType: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    icon: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),
    ),
  }),
};

Button.defaultProps = {
  className: '',
  disabled: false,
  type: 'button',
  btnType: 'primary',
  icon: null,
  onClick: () => {},
};

export default Button;
