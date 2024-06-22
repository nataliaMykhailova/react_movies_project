import {configureStore} from "@reduxjs/toolkit";

import {moviesSlice} from "./slices/MoviesSlice";
import {genresSlice} from "./slices/GenresSlice";
import {movieListsSlice} from "./slices/MovieListsSlice";
import {themeSlice} from "./slices/ThemeSlice";

export const store = configureStore({
    reducer:{
        moviesSlice: moviesSlice.reducer,
        genresSlice: genresSlice.reducer,
        movieListSlice: movieListsSlice.reducer,
        themeSlice: themeSlice.reducer
}
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
