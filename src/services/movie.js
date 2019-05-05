import axios from 'axios'

const apiKey = process.env.VUE_APP_OMDB_API_KEY;
const baseUrl = process.env.VUE_APP_OMDB_BASE_URL;
const cacheMap = {};

export default {
    getMovie(search, page) {
        const cacheKey = `${search}-${page}`;
        if(cacheMap[cacheKey]){
            return Promise.resolve(cacheMap[cacheKey]);
        }
        return axios.get(`${baseUrl}/?s=${search}&page=${page}&apikey=${apiKey}`)
            .then( res => {
                cacheMap[cacheKey] = res.data;
                return res.data;
            });
    },
    getMovieDetails(imdbID) {
        const cacheKey = `${imdbID}`;
        if(cacheMap[cacheKey]){
            return Promise.resolve(cacheMap[cacheKey]);
        }
        return axios.get(`${baseUrl}/?i=${imdbID}&apikey=${apiKey}`)
        .then( res => {
            cacheMap[cacheKey] = res.data;
            return res.data;
        });
    }
}