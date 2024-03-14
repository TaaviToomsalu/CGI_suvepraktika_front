const MovieListing = ({ movies }) => {
  return (
    <div>
      <h2>Movie Listing</h2>
      <ul>
      {movies && movies.map((movie) => (  // Check if movies is defined before mapping
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