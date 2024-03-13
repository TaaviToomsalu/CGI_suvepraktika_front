import React from 'react';

const MovieListing = ({ movies }) => {
  // Filter movies based on genre and age rating
  /*
  const filteredMovies = movies.filter((movie) => {
    if (genreFilter && movie.genre !== genreFilter) return false;
    if (ageRatingFilter && movie.ageRating !== ageRatingFilter) return false;
    if (timeFilter && movie.startTime !== timeFilter) return false;
    if (languageFilter && movie.language !== languageFilter) return false;
    


  })
  */
  return (
    <div>
      <h2>Movie Listing</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Age Rating: {movie.ageRating}</p>
            <p>Time: {movie.startTime}</p>
            <p>Language: {movie.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListing;