import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './styles.css';


//a09fb07

const API_URL = 'http://www.omdbapi.com?apikey=a09fb07';



const App = () => {
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        //console.log(data.Search);
        setMovies(data.Search);
    }



    // const movieData = {
    //     "Title": "Italian Spiderman",
    //     "Year": "2007",
    //     "imdbID": "tt2705436",
    //     "Type": "movie",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
    // }
    useEffect( () => {
        const term = "Spiderman"
        searchMovies(term);
     }, []);



    return (
        <div className="App">
            <h1>MovFlix</h1>


            <div className="search">
                <input placeholder="Search For Movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button type="button" onClick={()=>searchMovies(searchTerm)}>Search</button>
            </div>
            {movies.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (<MovieCard movie={movie} />))}


                </div> )
                :
                ( <div className="empty">
                    <h2>No movies founds</h2>
                </div> )
            }


        </div>
    );
}

export default App;


