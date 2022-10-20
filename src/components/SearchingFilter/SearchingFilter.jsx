import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './SearchingFilter.styled';

export const SearchingFilter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterLabel>
  );
};

SearchingFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
