import React from 'react';
import { useState, useEffect } from 'react';
import MovieListing from '../components/MovieListing';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genreFilter, setGenreFilter] = useState('');
  const [ageRatingFilter, setAgeRatingFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');



  // Fetch all movies
  
  const fetchAllMovies = async () => {
    try {
      const response = await fetch('http://localhost:8080/movies');
      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }
      const data = await response.json();
      setMovies(data);
      console.log('Movies:', data);
    } catch (error) {
      console.error('Error fetching movie data:', error.message);
    }
  };
    
  //Fetch movies based on genre
  
  const fetchMoviesByGenre = async (genre) => {
    try {
      const response = await fetch('http://localhost:8080/movies/genre?genre=${genre}');
      if (!response.ok) {
        throw new Error('Failed to fetch movie data by genre');
      }
      const data = await response.json();
      setMovies(data);
      console.log('Movies:', data);
    } catch (error) {
      console.error('Error fetching movie data:', error.message);
    }
  };
    
  

  // Fetch movies based on age rating
  const fetchMoviesByAgeRating = async (ageRating) => {
    try {
      const response = await fetch(`http://localhost:8080/movies/age-rating?ageRating=${ageRating}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie data by age rating');
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movie data by age rating:', error.message);
    }
  };

  // Fetch movies based on language
  const fetchMoviesByLanguage = async (language) => {
    try {
      const response = await fetch(`http://localhost:8080/movies/language?language=${language}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie data by age rating');
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movie data by age rating:', error.message);
    }
  };

  // Fetch movies based on start time
  const fetchMoviesByTime = async (startTime) => {
    try {
      const response = await fetch(`http://localhost:8080/movies/start-time?startTime=${startTime}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie data by age rating');
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movie data by age rating:', error.message);
    }
  };

  useEffect(() => {
    fetchAllMovies();
  }, []);


  return (
    <div>
      <h1>Home</h1>
      <h5>Filtering</h5>
      <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
        <option value="">Select Genre</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="romance">Romance</option>
        <option value="horror">Horror</option>
      </select>

      <input
        type="text"
        placeholder="Enter language"
        value={languageFilter}
        onChange={(e) => setLanguageFilter(e.target.value)}
      />

      <MovieListing
        movies={movies}
        genreFilter={genreFilter}
        ageRatingFilter={ageRatingFilter}
        timeFilter={timeFilter}
        languageFilter={languageFilter}
      />
    </div>
  );
};

export default Home;