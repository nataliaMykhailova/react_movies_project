import React, {useEffect} from 'react';
import HeaderComponent from "../../components/HeaderContainer/HeaderComponent/HeaderComponent";
import {Outlet, ScrollRestoration} from "react-router-dom";
import SideBarComponent from "../../components/SideBarContainer/SideBarComponent/SideBarComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import css from './MainLayout.module.css'
import {useAppDispatch} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/GenresSlice";

const MainLayout = () => {
    return (
        <div className={css.image}>
            <div className={css.mainLayout}>
                <div className={css.header}><HeaderComponent/></div>
                <div className={css.sideBar}><SideBarComponent/></div>
                <div className={css.outlet}><Outlet/></div>
                <div className={css.footer}><FooterComponent/></div>
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;