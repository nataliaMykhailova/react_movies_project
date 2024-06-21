import React, {FC} from 'react';
import {urls} from "../../../constants/urls";
import css from './PosterPreviewComponent.module.css'
interface IProps{
    path: string
}
const PosterPreviewComponent:FC<IProps> = ({path}) => {
    return (
        <div className={css.imgContainer}>
            <img className={css.img} src={urls.poster+path} alt={'poster'}/>
            <div className={css.imgPlayIcon}></div>
        </div>
    );
};

export default PosterPreviewComponent;