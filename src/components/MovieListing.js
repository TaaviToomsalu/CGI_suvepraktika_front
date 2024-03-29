const MovieListing = ({ movies, addToViewingHistory, selectedUser }) => {
  const formatStartTime = (startTimeArray) => {
    if (Array.isArray(startTimeArray) && startTimeArray.length === 2) {
        const hour = startTimeArray[0].toString().padStart(2, '0');
        const minute = startTimeArray[1].toString().padStart(2, '0');
        return `${hour}:${minute}`;
    } else {
        return 'Invalid start time';
    }
  };

  // Group movies by day of the week
  const moviesByDayOfWeek = {};
  movies.forEach((movie) => {
    const dayOfWeek = movie.dayOfWeek;
    if (!moviesByDayOfWeek[dayOfWeek]) {
      moviesByDayOfWeek[dayOfWeek] = [];
    }
    moviesByDayOfWeek[dayOfWeek].push(movie);
  });

  const handleAddToViewingHistory = (movieTitle) => {
    addToViewingHistory(movieTitle, selectedUser);
  };

  return (
    <div>
      <h3>Movie Listing</h3>
      {Object.keys(moviesByDayOfWeek).map((dayOfWeek) => (
        <div key={dayOfWeek}>
          <h4>{dayOfWeek}</h4>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Age Rating</th>
                <th>Start Time</th>
                <th>Language</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {moviesByDayOfWeek[dayOfWeek].map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.ageRating}</td>
                  <td>{formatStartTime(movie.startTime)}</td>
                  <td>{movie.language}</td>
                  <td>
                    <button onClick={() => handleAddToViewingHistory(movie.title)}>Add to Viewing History</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MovieListing;
