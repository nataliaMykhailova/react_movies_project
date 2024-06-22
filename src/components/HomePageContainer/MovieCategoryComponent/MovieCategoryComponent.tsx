import React, {FC} from 'react';

import {getRandomMovies} from "../../../helpers/randomMovie";
import MoviesListCardComponent from "../../MovieListCardContainer/MoviesListCardComponent/MoviesListCardComponent";
import {IMovieModel} from "../../../models/IMovieModels/IMovieModel";
import css from './MovieCategoryComponent.module.css'

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