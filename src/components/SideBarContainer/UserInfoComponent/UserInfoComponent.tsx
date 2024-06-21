import React from 'react';
import {Avatar, Stack} from "@mui/material";
import css from './UserInfoComponent.module.css'

const UserInfoComponent = () => {
    return (
        <div className={css.user}>
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://i.pinimg.com/564x/fb/7b/8a/fb7b8a64fedb8b28ba5b156f45d7bbeb.jpg"
                    sx={{ width: 100, height: 100 }}
                />
            </Stack>
            <h3>Estele Collins</h3>
            <h4>Montreal QS</h4>
            <hr/>

            </div>
    );
};

export default UserInfoComponent;