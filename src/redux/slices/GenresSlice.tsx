import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenreModel} from "../../models/IGenreModels/IGenreModel";
import {IMovieModel} from "../../models/IMovieModels/IMovieModel";
import {genreService} from "../../services/genreService";
import {IListResponseModel} from "../../models/IMovieModels/IListResponseModel";

type GenresSliceType = {
    genres: IGenreModel [],
    error: string | null,
    genreMoviesList: IListResponseModel<IMovieModel> | null
}

const genreInitialState:GenresSliceType ={
    genres: [],
    error: null,
    genreMoviesList:null
}

const loadGenresList = createAsyncThunk<IGenreModel[], null>(
    'genresSlice/loadGenresList',
    async (_, thunkAPI) => {
        try {
            const response = await genreService.getAll();
            return thunkAPI.fulfillWithValue(response.genres);
        } catch (e) {
            const error  = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);
const loadGenreMoviesList = createAsyncThunk<IListResponseModel<IMovieModel>, {genreId: number, page: number}>(
    'genresSlice/loadGenreMoviesList',
    async ({genreId, page}, thunkAPI) => {
        try {
            const response = await genreService.getMoviesByGenre(genreId, page);
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            const error  = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

export const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: genreInitialState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadGenresList.fulfilled, (state, action)=>{
            state.genres = action.payload;
        })
        .addCase(loadGenreMoviesList.fulfilled, (state, action)=>{
            state.genreMoviesList = action.payload
        })
        .addMatcher(isFulfilled(loadGenresList, loadGenreMoviesList), state => {
            state.error=null;
        })
        .addMatcher(isPending(loadGenresList, loadGenreMoviesList), state => {
            state.error = null;
        })
        .addMatcher(isRejected(loadGenresList, loadGenreMoviesList), (state, action)=>{
            state.error = action.payload as string;
        })
})

export const genreActions = {
    ...genresSlice.actions,
    loadGenresList,
    loadGenreMoviesList
}