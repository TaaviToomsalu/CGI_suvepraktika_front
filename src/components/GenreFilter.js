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
        <option value="Thriller">Thriller</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Romance">Romance</option>
        
      </select>
    </div>
  );
};

export default GenreFilter;