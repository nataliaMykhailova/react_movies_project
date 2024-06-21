import React, {FC} from 'react';
import {Rating, Typography} from "@mui/material";
interface IProps{
    rating: number
}
const StarsRatingComponent:FC<IProps> = ({rating}) => {

    return (
        <div>
            <Typography component="legend"/>
            <Rating name="customized-10" size="small" value={rating} precision={0.5} max={10} readOnly/>
        </div>
    );
};

export default StarsRatingComponent;