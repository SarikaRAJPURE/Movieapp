import React from 'react'

const MovieRatings = (props) => {

    let {searchedMovie} = props;
    console.log("MOVIE RATINGS COMPONENT", searchedMovie);
    
   const returnLoader = () => {
    return (
        <div>
            Loading ...
        </div>
    )
   }
    const returnMovieRatings = () => {
        let movieRatingJSX = searchedMovie.Ratings.map((item,index)=>{
           return(
            <div key={index}>
               <h4>{item.Source}</h4>
               <h5>{item.Value}</h5>

            </div>
           )
        })
        return movieRatingJSX;
        // array of jsx
    }
    return (
    <div style={{ borderBottom: "4px solid white", marginBottom: "20px", paddingBottom: "12px" }}>
        <h1>Movie Ratings</h1>
        {searchedMovie === null ? returnLoader() : returnMovieRatings() }
        </div>
  )
}

export default MovieRatings