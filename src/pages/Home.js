import React from 'react';
import { useState, useEffect } from 'react';
import MovieListing from '../components/MovieListing';
import GenreFilter from '../components/GenreFilter';
import LanguageFilter from '../components/LanguageFilter';
import StartTimeFilter from '../components/StartTimeFilter';
import AgeRatingFilter from '../components/AgeRatingFilter';


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
      const response = await fetch(`http://localhost:8080/movies/genre?genre=${genre}`);
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

  //Filters work on alredy filtered list
  useEffect(() => {
    const applyFilters = async () => {
      let filteredMovies = [...movies]; // Creates a copy of the movies array
      if (genreFilter) {
        filteredMovies = await fetchMoviesByGenre(genreFilter);
      }
      if (languageFilter) {
        filteredMovies = await fetchMoviesByLanguage(languageFilter);
      }
      if (timeFilter) {
        filteredMovies = await fetchMoviesByTime(timeFilter);
      }
      if (ageRatingFilter) {
        filteredMovies = await fetchMoviesByAgeRating(ageRatingFilter);
      }
      setMovies(filteredMovies);
    };
  
    applyFilters();
  }, [genreFilter, languageFilter, timeFilter, ageRatingFilter]);
  


  return (
    <div>
      <h1>Filmid</h1>
      <h5>Filtering</h5>
      <GenreFilter genreFilter={genreFilter} setGenreFilter={setGenreFilter} />
      <LanguageFilter languageFilter={languageFilter} setLanguageFilter={setLanguageFilter} />
      <StartTimeFilter startTimeFilter={timeFilter} setStartTimeFilter={setTimeFilter} />
      <AgeRatingFilter ageRatingFilter={ageRatingFilter} setAgeRatingFilter={setAgeRatingFilter} />

      

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