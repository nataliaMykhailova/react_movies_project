import React from 'react';
import {Outlet, ScrollRestoration} from "react-router-dom";

import HeaderComponent from "../../components/HeaderContainer/HeaderComponent/HeaderComponent";
import SideBarComponent from "../../components/SideBarContainer/SideBarComponent/SideBarComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import {useScrollToTop} from "../../hooks/useScrollToTop";
import {useAppSelector} from "../../hooks/reduxHooks";
import css from './MainLayout.module.css'

const MainLayout = () => {
    const {isLight}= useAppSelector(state => state.themeSlice)

    useScrollToTop();
    return (
        <div className={`${css.image} ${css} ${isLight ? css.light : css.dark}`}>
            <div className={css.mainLayout}>
                <div className={css.header}><HeaderComponent/></div>
                <div className={css.sideBar}><SideBarComponent/></div>
                <div className={`${css.outlet} ${css} ${isLight? css.oLight:css.oDark}`}><Outlet/></div>
                <div className={css.footer}><FooterComponent/></div>
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;