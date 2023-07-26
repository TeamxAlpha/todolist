// components/FilterButton.js
import React from 'react';

const FilterButton = ({ label, onClick }) => {
  return <button className="btn" onClick={onClick}>{label}</button>;
};

export default FilterButton;
