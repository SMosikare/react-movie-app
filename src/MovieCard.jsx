function MovieCard(props) {
  return (
    <div className="movie-card">
      <img
        src={props.movie.Poster}
        alt={props.movie.Title}
        className="poster"
      />
      <div className="poster-shadow"></div>

      <div className="type">{props.movie.Type}</div>

      <div className="info">
        <h4 className="title">{props.movie.Title}</h4>
        <div className="year">{props.movie.Year}</div>
      </div>
    </div>
  );
}
export default MovieCard;
