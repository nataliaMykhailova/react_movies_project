import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {IMovieModel} from "../../models/IMovieModel";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";
import {IVideoModel} from "../../models/IVideoModels/IVideoModel";

type MoviesSliceType = {
    movie: IMovieModel | null,
    trailer: IVideoModel[],
    error: string | null,
}
const movieInitialState: MoviesSliceType = {
    movie: null,
    trailer: [],
    error: null
}

const getOne = createAsyncThunk<IMovieModel, number>(
    'moviesSlice/getOne',
    async (movieId: number, thunkAPI) => {
        try {
            const response = await movieService.getOne(movieId);
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
const getTrailer = createAsyncThunk<IVideoModel[], number>(
    'moviesSlice/getTrailer',
    async (movieId: number, thunkAPI) => {
        try {
            const response = await movieService.getTrailer(movieId);
            return thunkAPI.fulfillWithValue(response.results)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);
export const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: movieInitialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getOne.fulfilled, (state, action) => {
            state.movie = action.payload;
        })
        .addCase(getTrailer.fulfilled, (state, action) => {
            state.trailer = action.payload;
        })
        .addMatcher(isRejected(getOne, getTrailer), (state, action) => {
            state.error = action.payload as string;
        })
        .addMatcher(isPending(getOne, getTrailer), state => {
            state.error = null;
        })
        .addMatcher(isFulfilled(getOne, getTrailer), state => {
            state.error = null
        })
})

export const movieActions = {
    ...moviesSlice.actions,
    getOne,
    getTrailer

}