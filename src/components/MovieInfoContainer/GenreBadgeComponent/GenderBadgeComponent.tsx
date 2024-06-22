import React, {FC} from 'react';
import {Badge} from "@mui/material";
import {NavLink} from "react-router-dom";

import {IGenreModel} from "../../../models/IGenreModels/IGenreModel";
import css from './GenderBadgeComponent.module.css'
interface IProps{
    genres: IGenreModel[]
}

const GenderBadgeComponent:FC<IProps> = ({genres}) => {
    return (
        <div className={css.badgeContainer}>

           Genres: {
            genres.map(genre =><div key={genre.id}>
                <NavLink to={`/movies/genre/${genre.id}`}>
                    <Badge badgeContent={genre.name} color="secondary" className={css.badge}/>
                </NavLink>
            </div>)
            }

            </div>
    );
};

export default GenderBadgeComponent;