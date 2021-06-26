const API_KEY = "56299b69e9ed4f02f26dead94bb6c370"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    //fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    //fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    //fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    //fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    //fetchTv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`

};
export default requests;