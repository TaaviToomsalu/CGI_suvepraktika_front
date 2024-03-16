import React from 'react';

const GenreFilter = ({ genreFilter, setGenreFilter }) => {
  return (
    <div>
      <label htmlFor="genre">Genre:</label>
      <select id="genre" value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Romance">Romance</option>
        <option value="Horror">Horror</option>
      </select>
    </div>
  );
};

export default GenreFilter;