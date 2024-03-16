import React from 'react';

const AgeRatingFilter = ({ ageRatingFilter, setAgeRatingFilter }) => {
  return (
    <div>
      <label htmlFor="ageRating">Age Rating:</label>
      <select id="ageRating" value={ageRatingFilter} onChange={(e) => setAgeRatingFilter(e.target.value)}>
        <option value="">All</option>
        <option value="G">G</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        <option value="R">R</option>
        <option value="NC-17">NC-17</option>
      </select>
    </div>
  );
};

export default AgeRatingFilter;
