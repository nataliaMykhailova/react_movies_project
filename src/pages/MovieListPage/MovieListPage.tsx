import React, {useEffect, useState} from 'react';
import {useLocation, useParams, useSearchParams} from "react-router-dom";

import MoviesListComponent from "../../components/MoviesListComponent/MoviesListComponent";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/GenresSlice";
import {IListResponseModel} from "../../models/IMovieModels/IListResponseModel";
import {IMovieModel} from "../../models/IMovieModels/IMovieModel";
import {movieListsActions} from "../../redux/slices/MovieListsSlice";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import {ChangeQueryType} from "../../types/changeEvent";

const MovieListPage = () => {

    const dispatch = useAppDispatch();

    const {query, movieId, genreId} = useParams();
    const location = useLocation();

    const [searchQuery, setSearchQuery] = useSearchParams()
    const page = searchQuery.get('page') || 1;
    const [listPaginatedObj, setListPaginatedObj] =
        useState<IListResponseModel<IMovieModel>>({
            page: 0,
            results: [],
            total_pages: 0,
            total_results: 0
        })

    const {
        fullList,
        upcomingList,
        popularList,
        topRatedList,
        nowPlayingList,
        similarList,
        searchList}
        = useAppSelector(state => state.movieListSlice);

    const {genreMoviesList} = useAppSelector(state =>
        state.genresSlice);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);
        dispatch(movieListsActions.setPage(+page));
        if (location.pathname.includes('/allMovies')) {
            dispatch(movieListsActions.loadFullList(+page));
        } else if (location.pathname.includes('/movies/now_playing')) {
            dispatch(movieListsActions.loadNowPlayingList(+page));
        } else if (location.pathname.includes('/movies/popular')) {
            dispatch(movieListsActions.loadPopularList(+page));
        } else if (location.pathname.includes('/movies/top_rated')) {
            dispatch(movieListsActions.loadTopRatedList(+page));
        } else if (location.pathname.includes('/movies/upcoming')) {
            dispatch(movieListsActions.loadUpcomingList(+page));
        } else if (location.pathname.includes('/movies/genre')) {
            dispatch(genreActions.loadGenreMoviesList({genreId: +genreId!, page: +page}));
        } else if (location.pathname.includes('/search/movie')) {
            dispatch(movieListsActions.loadSearchList({page: +page, query: query!}));
        } else if (location.pathname.includes(`/movie/${movieId}/similar`)) {
            dispatch(movieListsActions.loadSimilarList({page: +page, movieId: +movieId!}));
        }
    }, [movieId, dispatch, location.pathname, page, genreId, query]);


    useEffect(() => {
        if (location.pathname.includes('allMovies') && fullList) {
            setListPaginatedObj(fullList);
        } else if (location.pathname.includes('/movies/now_playing') && nowPlayingList) {
            setListPaginatedObj(nowPlayingList);
        } else if (location.pathname.includes('/movies/popular') && popularList) {
            setListPaginatedObj(popularList);
        } else if (location.pathname.includes('/movies/top_rated') && topRatedList) {
            setListPaginatedObj(topRatedList);
        } else if (location.pathname.includes('/movies/upcoming') && upcomingList) {
            setListPaginatedObj(upcomingList);
        } else if (location.pathname.includes('/movies/genre') && genreMoviesList) {
            setListPaginatedObj(genreMoviesList);
        } else if (location.pathname.includes('/search/movie') && searchList) {
            setListPaginatedObj(searchList);
        } else if (location.pathname.includes(`/movie/${movieId}/similar`) && similarList) {
            setListPaginatedObj(similarList);
        }
        setIsLoading(false);
    }, [movieId, nowPlayingList, fullList, popularList, topRatedList, upcomingList, genreMoviesList, searchList, similarList, location.pathname]);
    const handlePageChange = (event: ChangeQueryType, value: number) => {
        setSearchQuery({page: value.toString()});
        dispatch(movieListsActions.setPage(value));
    };

    return (
        <div>{isLoading ? (<div>Loading...</div>) : (<div>
                <MoviesListComponent movies={listPaginatedObj.results}/>
                <PaginationComponent count={listPaginatedObj.total_pages} page={+page} onChange={handlePageChange}/>

            </div>
        )}

        </div>
    );
};

export default MovieListPage;