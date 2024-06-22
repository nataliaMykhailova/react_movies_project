import React, {FC} from 'react';
import ReactPlayer from "react-player/youtube";

import css from './TrailerComponent.module.css'
interface IProps{
    trailer: string;
}
const TrailerComponent:FC<IProps> = ({trailer}) => {
    return (
        <div className={css.trailer}>
            {trailer ? (
                <div className={css.frame}>
                    <ReactPlayer light={true} playing={true} url={trailer} controls={true} />
                </div>
            ) : (
                <div className={css.frame}><img src={'https://2037604.fs1.hubspotusercontent-eu1.net/hubfs/2037604/Broadcasting/no%20video-1.jpg'} alt={trailer}/></div>
            )}

        </div>
    );
};

export default TrailerComponent;