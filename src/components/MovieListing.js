import React from 'react';

const MovieListing = ({ movies }) => {
  return (
    <div>
      <h2>Movie Listing</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Age Rating: {movie.ageRating}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListing;