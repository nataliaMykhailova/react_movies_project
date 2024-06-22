import React, {FC} from 'react';

import {urls} from "../../../constants/urls";
import css from './PosterPreviewComponent.module.css'
interface IProps{
    path: string
}
const PosterPreviewComponent:FC<IProps> = ({path}) => {
    const imagePath = path ? urls.poster + path : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

    return (
        <div className={css.imgContainer}>
            <img className={css.img} src={imagePath} alt={'poster'}/>
            <div className={css.imgPlayIcon}></div>
        </div>
    );
};

export default PosterPreviewComponent;