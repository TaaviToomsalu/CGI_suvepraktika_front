import React from 'react';
import MovieListing from '../components/MovieListing';

const Home = () => {
  // Dummy movie data for demonstration
  const movies = [
    { id: 1, title: 'Movie 1', genre: 'Action', ageRating: 'PG-13' },
    { id: 2, title: 'Movie 2', genre: 'Comedy', ageRating: 'PG' },
    // Add more movie objects as needed
  ];

  return (
    <div>
      <h1>Home</h1>
      <MovieListing movies={movies} />
    </div>
  );
};

export default Home;