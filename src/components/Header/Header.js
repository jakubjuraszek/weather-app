import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ handleManagementModal }) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <h1>
          <Link className="header__title" to="/">
            weather app
          </Link>
        </h1>
        {/* eslint-disable-next-line  */}
        <a className="header__button" role="button" onClick={handleManagementModal} tabIndex={0}>
          Manage
        </a>
      </nav>
    </header>
  );
};

Header.propTypes = {
  handleManagementModal: PropTypes.func.isRequired,
};

export default Header;
