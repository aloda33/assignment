import React, {useState, useEffect} from 'react';

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const m = ["a", "b", "c"]
    setMovies(m);
  }, []);

  return(
    <div>{movies.lenght}</div>
  );
  
}