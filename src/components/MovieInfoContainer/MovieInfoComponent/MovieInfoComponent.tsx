import React, {FC} from 'react';

import {IMovieModel} from "../../../models/IMovieModels/IMovieModel";
import StarsRatingComponent from "../../MovieListCardContainer/StarsRatingComponent/StarsRatingComponent";
import GenderBadgeComponent from "../GenreBadgeComponent/GenderBadgeComponent";
import {urls} from "../../../constants/urls";
import css from './MovieInfoComponent.module.css'

interface IProps{
    movie:IMovieModel
}
const MovieInfoComponent:FC<IProps>= ({movie}) => {

    return (
        <div className={css.infoBox}>
            <img src={urls.poster+movie.poster_path} alt={movie.title}/>

            <div className={css.info}>
            <h2>{movie.title}</h2>
            <StarsRatingComponent rating={movie.vote_average}/>
            <p>Release data - {movie.release_date}</p>
            <GenderBadgeComponent genres ={movie.genres}/>
            <p>{movie.overview}</p>
            </div>

        </div>
    );
};

export default MovieInfoComponent;