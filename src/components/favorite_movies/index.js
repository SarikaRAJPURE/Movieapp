import React from 'react'

const FavoriteMovies = (props) => {
    let {movieArray} = props;
    console.log(movieArray);
    let arrayJSX = movieArray.map((title, index) => {
        return <div key={index}>
            {title}
        </div>
    })

  return (
    <div style={{marginBottom: "50px"}}>
        <h1>Favorite Movies</h1>
        {arrayJSX}
    </div>
  )
}

export default FavoriteMovies