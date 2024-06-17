const baseUrl = 'https://api.themoviedb.org/3';
const genres = '/genre/movie/list';
const search = (query: string): string => `/search/keyword?query=${query}`;
const trailer =(movieId:number): string => `/movie/${movieId}/videos`;
const similar = (movieId:number): string => `/movie/${movieId}/similar`;
const details = (movieId:number):string => `/movie/${movieId}`;

const urls = {
    genres,
    search,
    trailer,
    similar,
    details,
    lists:{
        full: (page: number):string =>`/discover/movie?page=${page}`,
        now_playing: '/movie/now_playing',
        popular: '/movie/popular',
        top_rated: '/movie/top_rated',
        upcoming: '/movie/upcoming'
    }

}


export {
    baseUrl,
    urls

}