import React, { useState, useEffect,useRef } from 'react'
import axios from 'axios'

const Search = (props) => {

    let { setsearchedMovie } = props;
    let user = props.user;

    let { logString } = props;

    let isFirstRender = useRef(true);
    // logString("This string is from Search Child Component!")

    const [searchString, setsearchString] = useState('')
    //const [searchedMovie, setsearchedMovie] = useState(null)  //5 when we first render it will be null
    //console.log(searchedMovie);
    console.log(setsearchedMovie);

    useEffect(() => {
        
        //make this movie call randomly choose between 10 movies
        
        if (isFirstRender.current === true) {
          console.log("making api call");
           isFirstRender.current = false;
           makeServerCall("Pacific Rim")
       }
    }, []);

    const makeServerCall = async (string) => {
        //3 call express server with the string install axios
        try{
        let serverResponse = await axios({
            method: 'GET',
            url: `/get_movie/${string}`//replaced searchString with string to makeservercall
            //4make route in server for this    
        });
        console.log(serverResponse);
        setsearchString(''); //7Here we can change that value back to nothing when we submit.
        //6
        setsearchedMovie(serverResponse.data);   
    }
    catch (e){
        console.log(e);
    }     
    }

    const handleChange = (e) => {
        //console.log(e.target);
        console.dir(e.target);// What the element value WOULD BE after the change
        let newValue = e.target.value;
        console.log(newValue);
        setsearchString(newValue);//to apply the changes input value to input control
    }

    //1 listen for submit and make call to server
    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault();
        }
        console.log("Submitting!");
        //2 if we don't prevent the default, the page will refresh Will loose state
        makeServerCall(searchString);   
        
    };

    return (
        <section style={{ borderBottom: "4px solid white", marginBottom: "20px", paddingBottom: "12px" }}>
            <h3>Search for a movie!</h3>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="movie-search">Movie you are looking for   </label>
                <input type="search"
                    name='movie-search'
                    value={searchString}
                    placeholder='Type to search...'
                    onChange={(event) => handleChange(event)} />
            </form>
        </section>
    )
}

export default Search