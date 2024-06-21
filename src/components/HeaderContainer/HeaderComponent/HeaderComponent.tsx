import React from 'react';
import css from './HeaderComponent.module.css';
import GenreSelectorComponent from "../GenreSelectorComponent/GenreSelectorComponent";
import SearchComponent from "../SearchComponent/SearchComponent";
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className={css.header}>
            <GenreSelectorComponent/>
            <NavLink to={'/'}>Home Page</NavLink>
            <SearchComponent/>

        </div>
    );
};

export default HeaderComponent;