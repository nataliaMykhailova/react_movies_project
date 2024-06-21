import React from 'react';
import css from './FooterComponent.module.css'
import {NavLink} from "react-router-dom";

const FooterComponent = () => {
    return (
        <div className={css.footer}>
            <hr/>
            <div className={css.footerInfo}>
                <h4>Source - </h4>
                <NavLink to={'https://developer.themoviedb.org'}>https://developer.themoviedb.org</NavLink>
                <h5>Author - Natalia Mykhailova, group - jan-2024</h5>
            </div>

        </div>
    );
};

export default FooterComponent;