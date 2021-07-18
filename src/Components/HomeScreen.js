import React from 'react';
import requests from '../Backend/Requests';
import Banner from './Banner';
import Nav from './Nav';
import Row from './Row';
function HomeScreen() {

    
    return (
        <div className="homescreen">
            <Nav />
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
                video="tv"
            />
            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}

            /> 
             <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
                
            />  <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
                video="movie"

            />  <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
                video="movie"

            />  <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorroMovies}
                video="movie"

            />  <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanticMovies}
                video="movie"

            />  <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
                video="movie"

            />
        </div>
    )
}

export default HomeScreen
