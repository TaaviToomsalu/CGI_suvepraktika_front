import React from 'react';
import { useState, useEffect } from 'react';
import MovieListing from '../components/MovieListing';

const Home = () => {
  const [movies, setMovies] = useState([]);

  // fetch movie data from the backend
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:8080/movies');
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movie data:', error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <MovieListing movies={movies} />
    </div>
  );
};

export default Home;