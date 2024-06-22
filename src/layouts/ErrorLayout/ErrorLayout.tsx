import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './ErrorLayout.module.css'

const ErrorLayout = () => {
    const navigate  = useNavigate();
    return (
        <div className={css.error}>
            <button onClick={()=>navigate('/')}>Go back</button>
        </div>
    );
};

export default ErrorLayout;