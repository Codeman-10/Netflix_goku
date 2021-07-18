import axios from "../Backend/axios.js";
import React, { useEffect, useState } from 'react'
import './Styles/Row.css';
import VideoComponent from "./VideoComponent.js";

function Row({ title, fetchUrl, isLargeRow, video }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => (
                    <VideoComponent
                        MovieName={movie.name||movie.original_title}
                        key={movie.id}
                        MovieId={movie.id}
                        posterPath={movie.poster_path}
                        backpath={movie.backdrop_path}
                        IsLargeRow={isLargeRow}
                        videoType={video}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
