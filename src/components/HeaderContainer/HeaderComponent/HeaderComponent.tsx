import React from 'react';
import {NavLink} from "react-router-dom";

import GenreSelectorComponent from "../GenreSelectorComponent/GenreSelectorComponent";
import SearchComponent from "../SearchComponent/SearchComponent";
import css from './HeaderComponent.module.css';

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