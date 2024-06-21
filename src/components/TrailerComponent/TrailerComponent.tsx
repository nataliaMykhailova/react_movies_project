import React, {FC} from 'react';
import ReactPlayer from "react-player/youtube";
interface IProps{
    trailer: string;
}
const TrailerComponent:FC<IProps> = ({trailer}) => {
    return (
        <div>
            <ReactPlayer light={true}  playing={true} url={trailer} controls={true} />

        </div>
    );
};

export default TrailerComponent;