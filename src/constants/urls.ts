const baseURL = 'https://api.themoviedb.org/3';
const urls = {
    poster: 'https://image.tmdb.org/t/p/w500',
    video: 'https://www.youtube.com/embed/',
    genres: '/genre/movie/list',
    search: (query: string): string => `/search/keyword?query=${query}`,
    trailer:(movieId:number): string => `/movie/${movieId}/videos`,
    similar: (movieId:number): string => `/movie/${movieId}/similar`,
    details: (movieId:number):string => `/movie/${movieId}`,
    lists:{
        full:`/discover/movie`,
        now_playing: '/movie/now_playing',
        popular: '/movie/popular',
        top_rated: '/movie/top_rated',
        upcoming: '/movie/upcoming'
    }

}


export {
    baseURL,
    urls

}