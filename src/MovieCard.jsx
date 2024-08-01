function MovieCard(props) {
  return (
    <div className="movie-card">
      <img
        src={props.movie.poster}
        alt={props.movie.title}
        className="poster"
      />
      <div className="poster-shadow"></div>

      <div className="type">{props.movie.type}</div>

      <div className="info">
        <h4 className="title">{props.movie.title}</h4>
        <div className="year">{props.movie.year}</div>
      </div>
    </div>
  );
}
export default MovieCard;
