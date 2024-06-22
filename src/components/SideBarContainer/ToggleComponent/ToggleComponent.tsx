import React from 'react';
import {Switch} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {themeActions} from "../../../redux/slices/ThemeSlice";
import css from './ToggleComponent.module.css'

const ToggleComponent = () => {
    const dispatch = useAppDispatch();
    const isLightTheme = useAppSelector(state => state.themeSlice.isLight);

    const handleChange = () => {
        dispatch(themeActions.toggleTheme());
    };
    return (
        <div className={css.theme}>
            <h2>Choose theme:</h2>
            {isLightTheme?<h3>Light theme</h3>:<h3>Dark theme </h3>}
            <Switch checked={!isLightTheme} onChange={handleChange}/>
        </div>
    );
};

export default ToggleComponent;