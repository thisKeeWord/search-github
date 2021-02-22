import React from 'react';
import PropTypes from 'prop-types';


function Icon(props) {
  return (<img src='./reference_materials/icon-search.svg' alt="search" />);
}

Icon.propTypes = {
  className: PropTypes.string,
};

export default Icon;
