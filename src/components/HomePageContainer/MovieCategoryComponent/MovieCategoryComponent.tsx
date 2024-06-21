import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slices/MoviesSlice";
import {getRandomMovies} from "../../../helpers/randomMovie";
import css from './MovieCategoryComponent.module.css'
import MoviesListCardComponent from "../../MovieListCardContainer/MoviesListCardComponent/MoviesListCardComponent";
import {movieListsActions} from "../../../redux/slices/MovieListsSlice";
import {IMovieModel} from "../../../models/IMovieModel";
interface IProps{
    movies:IMovieModel[]
}

const MovieCategoryComponent:FC<IProps> = ({movies}) => {

    return (
        <div className={css.category}>
            {
                getRandomMovies(movies, 5).map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)

            }

        </div>
    );
};

export default MovieCategoryComponent;