import React, {FC} from 'react';
import {IMovieModel} from "../../../models/IMovieModel";
import css from './MovieListCardComponent.module.css'
import {NavLink} from "react-router-dom";
import PosterPreviewComponent from "../PosterPreviewComponent/PosterPreviewComponent";
import StarsRatingComponent from "../StarsRatingComponent/StarsRatingComponent";
interface IProps {
    movie: IMovieModel
}
const MoviesListCardComponent:FC<IProps> = ({movie}) => {
    console.log(movie);
    return (
        <NavLink to={`/movie/${movie.id}`} className={css.card}>
            <div className={css.poster}><PosterPreviewComponent path = {movie.poster_path}/></div>
            <div><StarsRatingComponent rating = {movie.vote_average}/></div>
            <h5>{movie.title}</h5>
        </NavLink>
    );
};

export default MoviesListCardComponent;