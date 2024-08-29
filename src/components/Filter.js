import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Filter({ onFilter }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
