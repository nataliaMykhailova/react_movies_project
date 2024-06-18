import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {IMovieModel} from "../../models/IMovieModel";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";
import {IVideoModel} from "../../models/IVideoModels/IVideoModel";
import {urls} from "../../constants/urls";

type MoviesSliceType = {
    fullList: IMovieModel[],
    movie:IMovieModel | null,
    trailer: IVideoModel[],
    searchList: IMovieModel[],
    similarList: IMovieModel[],
    nowPlayingList: IMovieModel[],
    popularList: IMovieModel[],
    topRatedList: IMovieModel[],
    upcomingList: IMovieModel[],
    error: string | null,
}
const movieInitialState:MoviesSliceType = {
    fullList: [],
    movie: null,
    trailer: [],
    searchList: [],
    similarList: [],
    nowPlayingList:[],
    popularList:[],
    topRatedList: [],
    upcomingList: [],
    error: null
}

const loadFullList = createAsyncThunk<IMovieModel[], number >(
    'moviesSlice/loadFullList',
    async (page:number, thunkAPI) => {
            try{
                const response = await movieService.fullList(page);
                return thunkAPI.fulfillWithValue(response.results)
            } catch (e){
                const error = e as AxiosError;
                return  thunkAPI.rejectWithValue(error.response?.data)
            }
    }
);
const getOne = createAsyncThunk<IMovieModel, number>(
    'moviesSlice/getOne',
    async (movieId:number, thunkAPI) => {
        try {
            const response = await movieService.getOne(movieId);
            return thunkAPI.fulfillWithValue(response)
        } catch (e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
const getTrailer = createAsyncThunk<IVideoModel[], number>(
    'moviesSlice/getTrailer',
    async (movieId:number, thunkAPI) =>{
        try{
            const response = await movieService.getTrailer(movieId);
            return thunkAPI.fulfillWithValue(response.results)
        }catch (e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);
const loadSearchList = createAsyncThunk<IMovieModel[], {page:number, query:string} >(
    'moviesSlice/loadSearchList',
    async ({page, query}, thunkAPI) => {
        try{
            const response = await movieService.search(page,query);
            return thunkAPI.fulfillWithValue(response.results)
        } catch (e){
            const error = e as AxiosError;
            return  thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);
const loadSimilarList = createAsyncThunk<IMovieModel[], {page: number, movieId:number} >(
    'moviesSlice/loadSimilarList',
    async ({page, movieId}, thunkAPI) => {
        try {
            const response = await movieService.similar(page, movieId);
            return thunkAPI.fulfillWithValue(response.results);
        } catch (e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
const loadNowPlayingList = createAsyncThunk<IMovieModel[], number >(
    'moviesSlice/loadNowPlayingList',
    async(page:number, thunkAPI) => {
        try{
            const response = await movieService.endpointList(page, urls.lists.now_playing);
            return thunkAPI.fulfillWithValue(response.results);
        } catch (e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
const loadPopularList = createAsyncThunk<IMovieModel[], number >(
    'moviesSlice/loadPopularList',
    async(page:number, thunkAPI) => {
        try{
            const response = await movieService.endpointList(page, urls.lists.popular);
            return thunkAPI.fulfillWithValue(response.results);
        } catch (e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
const loadTopRatedList = createAsyncThunk<IMovieModel[], number >(
    'moviesSlice/loadTopRatedList',
    async(page:number, thunkAPI) => {
        try{
            const response = await movieService.endpointList(page, urls.lists.top_rated);
            return thunkAPI.fulfillWithValue(response.results);
        } catch (e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
const loadUpcomingList = createAsyncThunk<IMovieModel[],number >(
    'moviesSlice/loadUpcomingList',
    async(page:number, thunkAPI) => {
        try{
            const response = await movieService.endpointList(page, urls.lists.upcoming);
            return thunkAPI.fulfillWithValue(response.results);
        } catch (e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);
export const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState: movieInitialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(loadFullList.fulfilled, (state, action)=>{
            state.fullList = action.payload;
        })
        .addCase(getOne.fulfilled, (state, action)=>{
            state.movie = action.payload;
        })
        .addCase(getTrailer.fulfilled, (state, action) => {
            state.trailer = action.payload;
        })
        .addCase(loadSearchList.fulfilled, (state, action)=>{
            state.searchList = action.payload
        })
        .addCase(loadSimilarList.fulfilled, (state, action)=>{
            state.similarList = action.payload
        })
        .addCase(loadUpcomingList.fulfilled, (state, action)=>{
            state.upcomingList = action.payload
        })
        .addCase(loadPopularList.fulfilled, (state, action)=>{
            state.popularList = action.payload
        })
        .addCase(loadNowPlayingList.fulfilled, (state, action)=>{
            state.nowPlayingList =action.payload
        })
        .addCase(loadTopRatedList.fulfilled, (state, action)=>{
            state.topRatedList = action.payload
        })
        .addMatcher(isRejected(loadFullList, getOne, getTrailer, loadTopRatedList, loadUpcomingList, loadPopularList, loadSearchList, loadSimilarList, loadNowPlayingList), (state, action) => {
            state.error = action.payload as string;
        })
        .addMatcher(isPending(loadFullList, getOne, getTrailer, loadTopRatedList, loadUpcomingList, loadPopularList, loadSearchList, loadSimilarList, loadNowPlayingList), state=>{
            state.error = null;
        })
        .addMatcher(isFulfilled(loadFullList, getOne, getTrailer, loadTopRatedList, loadUpcomingList, loadPopularList, loadSearchList, loadSimilarList, loadNowPlayingList), state => {
            state.error = null
        })
})

export const movieActions ={
    ...moviesSlice.actions,

}