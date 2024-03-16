const MovieListing = ({ movies }) => {
  const formatStartTime = (startTimeArray) => {
    // Ensure the startTimeArray has two elements (hour and minute)
    if (Array.isArray(startTimeArray) && startTimeArray.length === 2) {
        const hour = startTimeArray[0].toString().padStart(2, '0');
        const minute = startTimeArray[1].toString().padStart(2, '0');
        return `${hour}:${minute}`;
    } else {
        return 'Invalid start time';
    }
};

  return (
    <div>
      <h3>Movie Listing</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Age Rating</th>
            <th>Start Time</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {movies && movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.ageRating}</td>
              <td>{formatStartTime(movie.startTime)}</td>
              <td>{movie.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieListing;