import axios from "../Backend/axios.js";
import React, { useEffect, useState } from 'react'
import './Styles/Banner.css'
import requests from "../Backend/Requests.js";
import Typewriter from 'typewriter-effect';

function Bannner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;

        };
        fetchData();
    }, [])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.
                    backdrop_path}")`,
                backgroundPositions: "center center",
            }}
        >
            <div className="banner_content">
                <h1 className="banner_title">
                    <Typewriter
                        options={{
                            strings: [`${movie?.name || movie?.original_name}`],
                            autoStart: true,
                            loop: true,
                            pauseFor: 5000
                        }}
                    />
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">play</button>
                    <button className="banner_button"> My List</button>
                </div>
                <div className="banner_descriptions">
                    {truncate(movie?.overview, 150)}                </div>
            </div>
            <div className="banner_fadebottom" ></div>
        </header>
    )
}

export default Bannner
