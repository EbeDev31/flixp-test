import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import MovieListComponent from './components/MovieListComponent'
import './App.css';

const url = 'https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10';
function App() {

  const [movieList, setMovieList] = useState([]);
  const [listTitle, setListTitle] = useState('');

  useEffect(() => {
    fetchMovieList();
    // const refreshTime = setInterval(() => fetchMovieList(), 5000);
    // return () => {
    //   clearInterval(refreshTime);
    // };
  }, [])

  const fetchMovieList = () => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          console.log('Error ', res);
          throw Error(res);
        }
        return res.json()
      })
      .then(data => {
        console.log(data.title)
        setListTitle(data.title);
        getMovieData(data.films);
      })
      .catch(error => console.log('MyError', error))
  }

  const getMovieData = (movieData) => {
    console.log(movieData)
    let movieList = movieData.map((movie) => {

      const { title, slug, duration_seconds: duration } = movie
      console.log('films', duration)
      let tempMovie = {
        title,
        duration,
        slug
      };
      console.log('ebe', tempMovie)
      return tempMovie;
    })

    console.log('Moivesss', movieList)
    setMovieList(movieList);

  }

  return (
    <div className="App">
      <h1>Movies {listTitle}</h1>
      <MovieListComponent movieList={movieList} />
    </div>
  );
}
export default App;