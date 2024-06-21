import React, {useEffect} from 'react';
import GenderBadgeComponent from "../../components/MovieInfoContainer/GenreBadgeComponent/GenderBadgeComponent";
import MovieInfoComponent from "../../components/MovieInfoContainer/MovieInfoComponent/MovieInfoComponent";
import PosterPreviewComponent from "../../components/MovieListCardContainer/PosterPreviewComponent/PosterPreviewComponent";
import StarsRatingComponent from "../../components/MovieListCardContainer/StarsRatingComponent/StarsRatingComponent";
import TrailerComponent from "../../components/TrailerComponent/TrailerComponent";
import css from "../../components/HomePageContainer/HomePageComponent/HomePageComponent.module.css";
import {NavLink, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/MoviesSlice";
import {urls} from "../../constants/urls";
import {movieListsActions} from "../../redux/slices/MovieListsSlice";
import MovieCategoryComponent from "../../components/HomePageContainer/MovieCategoryComponent/MovieCategoryComponent";

const MovieDetailsPage = () => {
    const dispatch = useAppDispatch();
    const {movieId}= useParams();
    const {movie, trailer}= useAppSelector(state => state.moviesSlice);
    const similar = useAppSelector(state => state.movieListSlice.similarList)
    useEffect(() => {
        if(movieId) {
            dispatch(movieActions.getOne(+movieId));
            dispatch(movieActions.getTrailer(+movieId));
            dispatch(movieListsActions.loadSimilarList({page:1, movieId: +movieId}))
        }
    }, [movieId, dispatch]);
    const path = trailer && trailer.length > 1 ? urls.video + trailer[0].key : '';


    return (
        <div>

            {movie && <GenderBadgeComponent genres ={movie.genres}/>}
            {movie && <MovieInfoComponent/>}
            {movie && <PosterPreviewComponent path={movie.poster_path}/>}
            {movie && <StarsRatingComponent rating={movie.vote_average}/>}
            {trailer && <TrailerComponent trailer={path}/>}
            <div className={`${css.info} ${css.margin}`}><h3>Similar</h3> <NavLink to={`/movie/${movieId}/similar`}>see all</NavLink></div>
            {similar && <MovieCategoryComponent  movies={similar.results}/>}

            
            </div>
    );
};

export default MovieDetailsPage;