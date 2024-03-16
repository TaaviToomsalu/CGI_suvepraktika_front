import React from 'react';
import { useState, useEffect } from 'react';
import MovieListing from '../components/MovieListing';
import GenreFilter from '../components/GenreFilter';
import LanguageFilter from '../components/LanguageFilter';
import StartTimeFilter from '../components/StartTimeFilter';
import AgeRatingFilter from '../components/AgeRatingFilter';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genreFilter, setGenreFilter] = useState('');
  const [ageRatingFilter, setAgeRatingFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch all movies
  const fetchAllMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/movies');
      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }
      const data = await response.json();

      setMovies(data);
      setFilteredMovies(data);
      setLoading(false);
      console.log(data)
    } catch (error) {
      console.error('Error fetching movie data:', error.message);
      return [];
    }
  };
    
  //fetch movies by filter
  const fetchMovies = async (endpoint) => {
    try {
      const response = await fetch(`http://localhost:8080/movies/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch movie data by ${endpoint}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching movie data by ${endpoint}:`, error.message);
      return [];
    }
  };
  
  // Fetch movies based on genre
  const fetchMoviesByGenre = async (genre) => {
    return await fetchMovies(`genre?genre=${genre}`);
  };
  
  // Fetch movies based on age rating
  const fetchMoviesByAgeRating = async (ageRating) => {
    return await fetchMovies(`age-rating?ageRating=${ageRating}`);
  };
  
  // Fetch movies based on language
  const fetchMoviesByLanguage = async (language) => {
    return await fetchMovies(`language?language=${language}`);
  };
  
  // Fetch movies based on start time
  const fetchMoviesByTime = async (startTime) => {
    return await fetchMovies(`start-time?startTime=${startTime}`);
  };

  useEffect(() => {
    fetchAllMovies();
  }, []);

  //Filters work on already filtered list
  useEffect(() => {
    if (!loading) { 
      const applyFilters = async () => {
        try {
          let filtered = [...filteredMovies];
          const filters = [
            { filter: genreFilter, fetchData: fetchMoviesByGenre },
            { filter: languageFilter, fetchData: fetchMoviesByLanguage },
            { filter: timeFilter, fetchData: fetchMoviesByTime },
            { filter: ageRatingFilter, fetchData: fetchMoviesByAgeRating }
          ];
  
          for (const { filter, fetchData } of filters) {
            if (filter) {
              const filteredData = await fetchData(filter);
              filtered = filtered.filter(filteredMovie =>
                filteredData.some(movie => movie.id === filteredMovie.id)
              );
            }
          }
  
          setFilteredMovies(filtered);
        } catch (error) {
          console.error('Error applying filters:', error.message);
        }
      };
  
      applyFilters();
    } 
  }, [genreFilter, languageFilter, timeFilter, ageRatingFilter]);
  

  return (
    <div>
      <h1>Filmid</h1>
      <h3>Filtering</h3>
      <GenreFilter genreFilter={genreFilter} setGenreFilter={setGenreFilter} />
      <LanguageFilter languageFilter={languageFilter} setLanguageFilter={setLanguageFilter} />
      <StartTimeFilter startTimeFilter={timeFilter} setStartTimeFilter={setTimeFilter} />
      <AgeRatingFilter ageRatingFilter={ageRatingFilter} setAgeRatingFilter={setAgeRatingFilter} />

      {loading ? (
      <p>Loading...</p>
    ) : (
      <MovieListing
        movies={filteredMovies}
        genreFilter={genreFilter}
        ageRatingFilter={ageRatingFilter}
        timeFilter={timeFilter}
        languageFilter={languageFilter}
      />
    )}
    </div>
  );
};

export default Home;