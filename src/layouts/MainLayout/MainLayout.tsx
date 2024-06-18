import React from 'react';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import {Outlet} from "react-router-dom";
import SideBarComponent from "../../components/SideBarComponent/SideBarComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <SideBarComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;