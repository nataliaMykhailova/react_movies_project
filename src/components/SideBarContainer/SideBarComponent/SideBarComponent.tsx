import React from 'react';
import UserInfoComponent from "../UserInfoComponent/UserInfoComponent";
import css from './SideBarComponent.module.css'
import {NavLink} from "react-router-dom";

const SideBarComponent = () => {
    return (
        <div className={css.sideBar}>
            <UserInfoComponent/>
            <NavLink to={'/allMovies'}>All movies</NavLink>
            <NavLink to={'/movies/now_playing'}>Now playing</NavLink>
            <NavLink to={'/movies/popular'}>Popular</NavLink>
            <NavLink to={'/movies/top_rated'}>Top rated</NavLink>
            <NavLink to={'/movies/upcoming'}>Upcoming</NavLink>
            <hr/>
            
        </div>
    );
};
export default SideBarComponent;