import {IListResponseModel} from "../../models/IListResponseModel";
import {IMovieModel} from "../../models/IMovieModel";
import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";
import {urls} from "../../constants/urls";

type MovieListsSliceType = {
    fullList: IListResponseModel<IMovieModel> | null;
    searchList: IListResponseModel<IMovieModel> | null;
    similarList: IListResponseModel<IMovieModel> | null;
    nowPlayingList: IListResponseModel<IMovieModel> | null;
    popularList: IListResponseModel<IMovieModel> | null;
    topRatedList: IListResponseModel<IMovieModel> | null;
    upcomingList: IListResponseModel<IMovieModel> | null;
    error: string | null;


}
const movieListInitialState: MovieListsSliceType = {
    fullList: null,
    searchList: null,
    similarList: null,
    nowPlayingList: null,
    popularList: null,
    topRatedList: null,
    upcomingList: null,
    error: null
}
const loadSearchList = createAsyncThunk<IListResponseModel<IMovieModel>, { page: number, query: string }>(
    'moviesSlice/loadSearchList',
    async ({page, query}, thunkAPI) => {
        try {
            const response = await movieService.search(page, query);
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);
const loadSimilarList = createAsyncThunk<IListResponseModel<IMovieModel>, { page: number, movieId: number }>(
    'moviesSlice/loadSimilarList',
    async ({page, movieId}, thunkAPI) => {
        try {
            const response = await movieService.similar(page, movieId);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
const loadFullList = createAsyncThunk<IListResponseModel<IMovieModel>, number>(
    'moviesSlice/loadFullList',
    async (page, thunkAPI) => {
        try {
            const response = await movieService.endpointList(page, urls.lists.full);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
const loadPopularList = createAsyncThunk<IListResponseModel<IMovieModel>, number>(
    'moviesSlice/loadPopularList',
    async (page, thunkAPI) => {
        try {
            const response = await movieService.endpointList(page, urls.lists.popular);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }

    }
);
const loadTopRatedList = createAsyncThunk<IListResponseModel<IMovieModel>, number>(
    'moviesSlice/loadTopRatedList',
    async (page, thunkAPI) => {
        try {
            const response = await movieService.endpointList(page, urls.lists.top_rated);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }

    }
);
const loadNowPlayingList = createAsyncThunk<IListResponseModel<IMovieModel>, number>(
    'moviesSlice/loadNowPlayingList',
    async (page, thunkAPI) => {
        try {
            const response = await movieService.endpointList(page, urls.lists.now_playing);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
const loadUpcomingList = createAsyncThunk<IListResponseModel<IMovieModel>, number>(
    'moviesSlice/loadUpcomingList',
    async (page, thunkAPI) => {
        try {
            const response = await movieService.endpointList(page, urls.lists.upcoming);
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

export const movieListsSlice = createSlice({
    name: 'movieListsSlice',
    initialState: movieListInitialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadFullList.fulfilled, (state, action)=>{
            state.fullList =action.payload
        })
        .addCase(loadUpcomingList.fulfilled, (state, action)=>{
            state.upcomingList =action.payload
        })
        .addCase(loadPopularList.fulfilled, (state, action)=>{
            state.popularList =action.payload
        })
        .addCase(loadSearchList.fulfilled, (state, action)=>{
            state.searchList =action.payload
        })
        .addCase(loadNowPlayingList.fulfilled, (state, action)=>{
            state.nowPlayingList =action.payload
        })
        .addCase(loadSimilarList.fulfilled, (state, action)=>{
            state.similarList =action.payload
        })
        .addCase(loadTopRatedList.fulfilled, (state, action)=>{
            state.topRatedList =action.payload
        })
        .addMatcher(isRejected(loadTopRatedList, loadSimilarList, loadSearchList, loadUpcomingList, loadPopularList, loadFullList, loadNowPlayingList), (state, action) => {
            state.error = action.payload as string;
        })
        .addMatcher(isPending(loadTopRatedList, loadSimilarList, loadSearchList, loadUpcomingList, loadPopularList, loadFullList, loadNowPlayingList), state => {
            state.error = null;
        })
        .addMatcher(isFulfilled(loadTopRatedList, loadSimilarList, loadSearchList, loadUpcomingList, loadPopularList, loadFullList, loadNowPlayingList), state => {
            state.error = null
        })


})

export const movieListsActions = {
    ...movieListsSlice.actions,
    loadNowPlayingList,
    loadFullList,
    loadPopularList,
    loadSimilarList,
    loadSearchList,
    loadUpcomingList,
    loadTopRatedList
}