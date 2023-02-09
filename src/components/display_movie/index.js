import React from 'react'

const DisplayMovie = (props) => {

  let { searchedMovie, movieArray, setMovieArray } = props;
  console.log(searchedMovie, "from displaymovie component");
  // when we first time render display component searchedmovie is null
  const returnMovieJSX = () => {
    if (searchedMovie !== null) {
      return (
        <div >
          <h3>MOVIE DISPLAY</h3>
          <h4>{searchedMovie.Title}</h4>
          <p>{searchedMovie.Plot}</p>
          {/* check if posterURL exists */}
          {searchedMovie.Poster.toLowerCase() === "n/a" ?
            <div></div>
            : <img src={searchedMovie.Poster} alt={searchedMovie.Title} />}
        </div>
      )
    } else {
      return (
        <div>
          waiting for movie...
        </div>
      )
    }
  }


  const handleClick = () => {
    console.log('clicked');
    // add title of current movie to that array (push it) also check if already exists in the list
    if (!movieArray.includes(searchedMovie.Title)) {
      setMovieArray([...movieArray, searchedMovie.Title])
    }
    
  }

  return (
    <section onClick={()=>handleClick()}>
      {returnMovieJSX()}
      </section>
  )
}

export default DisplayMovie