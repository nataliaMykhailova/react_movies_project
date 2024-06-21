import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {genreActions} from "../../../redux/slices/GenresSlice";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useNavigate} from "react-router-dom";

const GenreSelectorComponent = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genreActions.loadGenresList(null));
    }, [dispatch]);

    const {genres} = useAppSelector(state => state.genresSlice);

    const [idOfSelectedGenre, setIdOfSelectedGenre] =
        useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: SelectChangeEvent) => {
        const genreId = e.target.value;
        setIdOfSelectedGenre(genreId);
        navigate(`/movies/genre/${genreId}`);
        setIdOfSelectedGenre(null);
    }
    return (
        <div>
            <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-standard-label" size={"normal"}>All Genres</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={idOfSelectedGenre ?? ''}
                    onChange={handleChange}
                    label="All Genres"
                >
                    {
                        genres.map(genre =>
                            <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>)
                    }
                </Select>
            </FormControl>

        </div>
    );
};

export default GenreSelectorComponent;