const express = require('express')
require('dotenv').config()
const axios = require('axios') 
const cors = require('cors')
const path = require('path')

//In server , on the back end. This is how we pull in from libraries and then on the front end. It's import axios.
const app = express()

console.log(process.env.API_KEY);
app.use(cors('*/*'))

//SERVE THE REACT APP FROM SERVER
app.use(express.static(path.join(__dirname,'build')))//__dirname : current dir and it will automatically serve index.html

app.get('/get_movie/:movieString', async(req, res) => {  //async 
    console.log(req.params.movieString);
    //res.send("Server running");
    //res.send("Good request");
    //Call API using axios and its by deafult get request so no need to say its type:GET
    let apiResponse = await axios(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${req.params.movieString}`)
    const data = apiResponse.data;
    console.log(data);
    res.json(data); // data is object so res.json instead of res.send
});

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})