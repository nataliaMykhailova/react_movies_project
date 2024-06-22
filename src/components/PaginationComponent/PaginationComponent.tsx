import React from 'react';
import {Pagination, Typography} from "@mui/material";

import {ChangeQueryType} from "../../types/changeEvent";
import css from './PaginationComponent.module.css'

interface PaginationProps {
    count: number;
    page: number;
    onChange: (event: ChangeQueryType, value: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({ count, page, onChange }) => {
    return (
        <div className={css.pagination}>
            <Typography>Page: {page}</Typography>
            <Pagination count={count} page={page} onChange={onChange} size="large" />
        </div>
    );
};

export default PaginationComponent;