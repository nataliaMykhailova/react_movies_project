import {useLocation} from "react-router-dom";
import {useEffect} from "react";

import css from "../layouts/MainLayout/MainLayout.module.css";

export const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const outlet = document.querySelector(`.${css.outlet}`);
        if (outlet) {
            outlet.scrollTo(0, 0);
        }
    }, [pathname]);
};