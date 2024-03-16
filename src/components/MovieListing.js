const MovieListing = ({ movies }) => {
  const formatStartTime = (startTime) => {
    // Extract hour and minute from the startTime
    const hour = startTime.getHours().toString().padStart(2, '0'); // Ensure 2-digit representation
    const minute = startTime.getMinutes().toString().padStart(2, '0'); // Ensure 2-digit representation
    return `${hour}:${minute}`;
  };

  return (
    <div>
      <h2>Movie Listing</h2>
      <ul>
      {movies && movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Age Rating: {movie.ageRating}</p>
            <p>Start Time: {formatStartTime(movie.startTime)}</p>
            <p>Language: {movie.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListing;