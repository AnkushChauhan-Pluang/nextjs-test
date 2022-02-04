import React from "react";

const Movies = ({ movies }) => {
  if (movies.success === false)
    return <div className="border-l-8 border-red-600 px-2 m-2">{movies.status_message}</div>;

  return (
    <div>
      <div>No.of movies: {movies.length}</div>
      <pre>{JSON.stringify(movies, null, 2)}</pre>
    </div>
  );
};

export default Movies;

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`
  );
  const movies = await res.json();
  return { props: { movies } };
};
