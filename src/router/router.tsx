import {createBrowserRouter, RouteObject} from "react-router-dom";

import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout/ErrorLayout";
import HomePage from "../pages/HomePage/HomePage";
import MovieListPage from "../pages/MovieListPage/MovieListPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";

const  routes:RouteObject[] = [
    {path:'', element: <MainLayout/>,
    errorElement: <ErrorLayout/>,
    children: [
        {index: true, element: <HomePage/>},
        {path:'/allMovies', element: <MovieListPage/>},
        {path:'/movies/genre/:genreId', element: <MovieListPage/>},
        {path:'/movie/:movieId/similar', element: <MovieListPage/>},
        {path:'/movies/now_playing', element: <MovieListPage/>},
        {path:'/movies/top_rated', element: <MovieListPage/>},
        {path:'/movies/upcoming', element: <MovieListPage/>},
        {path:'/movies/popular', element: <MovieListPage/>},
        {path:'/search/movie/:query', element: <MovieListPage/>},
        {path:'/movie/:movieId', element: <MovieDetailsPage/>}

    ]},
]
const router = createBrowserRouter(routes);

export {
    router
}