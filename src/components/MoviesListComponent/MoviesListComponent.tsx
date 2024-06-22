import React, {FC} from 'react';

import {IMovieModel} from "../../models/IMovieModels/IMovieModel";
import MoviesListCardComponent from "../MovieListCardContainer/MoviesListCardComponent/MoviesListCardComponent";
import css from './MovieListComponent.module.css'
interface IProps{
    movies: IMovieModel[]
}
const MoviesListComponent:FC<IProps> = ({movies}) => {
    return (
        <div className={css.movieList}>
            {
                movies && movies.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export default MoviesListComponent;