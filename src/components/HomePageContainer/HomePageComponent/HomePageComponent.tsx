import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";

import MovieCategoryComponent from "../MovieCategoryComponent/MovieCategoryComponent";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieListsActions} from "../../../redux/slices/MovieListsSlice";
import css from './HomePageComponent.module.css'

const HomePageComponent = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(movieListsActions.loadNowPlayingList(1));
        dispatch(movieListsActions.loadPopularList(1));
        dispatch(movieListsActions.loadTopRatedList(1));
        dispatch(movieListsActions.loadUpcomingList(1));
    }, [dispatch]);

    const { nowPlayingList, popularList, topRatedList, upcomingList } =
        useAppSelector(state => state.movieListSlice);


    return (
        <div className={css.homePage}>
            <div className={css.info}><h3>Upcoming</h3> <NavLink to={'/movies/upcoming'}>see all</NavLink></div>
            {upcomingList && <MovieCategoryComponent  movies={upcomingList.results}/>}


            <div className={`${css.info} ${css.margin}`}><h3>Now playing</h3> <NavLink to={'/movies/now_playing'}>see all</NavLink></div>
            {nowPlayingList && <MovieCategoryComponent  movies={nowPlayingList.results}/>}

            <div className={`${css.info} ${css.margin}`}><h3>Popular</h3> <NavLink to={'/movies/popular'}>see all</NavLink></div>
            {popularList && <MovieCategoryComponent  movies={popularList.results}/>}

            <div className={`${css.info} ${css.margin}`}><h3>Top rated</h3> <NavLink to={'/movies/top_rated'}>see all</NavLink></div>
            {topRatedList && <MovieCategoryComponent  movies={topRatedList.results}/>}
        </div>
    );
};

export default HomePageComponent;