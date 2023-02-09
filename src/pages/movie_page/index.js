import React, { useState } from 'react'
import Search from '../../components/search';
import DisplayMovie from '../../components/display_movie';
import Header from '../../components/header';
import FavoriteMovies from '../../components/favorite_movies';
import MovieRatings from '../../components/movie_ratings';

const MoviePage = () => {

    //searchedMovie => state variable setsearchedMovie function to set state to new value
    const [searchedMovie, setsearchedMovie] = useState(null)//initial state null
    const [movieArray, setMovieArray] = useState([]);
    console.log(searchedMovie);

    const logString = (string) => {
        console.log("String is in APP", string);
    }
    return (
        <div>
            <div className='header'>
                <Header heading="Movies" />
                <Search setsearchedMovie={setsearchedMovie} user="Chase" logString={logString} />
                {/* This set search movie into our search so that our search can use
                 this set search movie to set that state. aacept these props in search component*/}
            </div>
            <DisplayMovie searchedMovie={searchedMovie} movieArray={movieArray} setMovieArray={setMovieArray} />
            <MovieRatings searchedMovie={searchedMovie}/>
            <FavoriteMovies movieArray={movieArray} />
        </div>
    )
}

export default MoviePage