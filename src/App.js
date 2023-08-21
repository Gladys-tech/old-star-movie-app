import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=4edbae7a"

function App() {


  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`);
    const data = await response.json();

    //console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('superman')
  }, [])

  // const movie1 = {
  //   Poster
  //     :
  //     "N/A",
  //"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  // Title
  //   :
  //   "Batman v Superman: Dawn of Justice",
  // Type
  //   :
  //   "movie",
  // Year
  //   :
  //   "2016",
  //   imdbID
  //     :
  //     "tt2975590",
  // }
  return (
    <div className="app">
      {/*  4edbae7a */}
      {/*  http://www.omdbapi.com/?i=tt3896198&apikey=4edbae7a */}
      <h1>Flick App</h1>
      <div className='search'>
        <input
          placeholder='search for old star movies'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"

          onClick={() => searchMovies(searchTerm)}
        />

      </div>

      {
        movies?.length > 0
          ? (
            <div className='container'>
              {/* <MovieCard movie1={movie1}/> */}
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>no movies found</h2>
            </div>
          )
      }


    </div>
  );
}

export default App;
