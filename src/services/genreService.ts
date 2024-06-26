import {IGenreResponseModel} from "../models/IGenreModels/IGenreResponseModel";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IListResponseModel} from "../models/IMovieModels/IListResponseModel";
import {IMovieModel} from "../models/IMovieModels/IMovieModel";

const genreService= {
    getAll: async ():Promise<IGenreResponseModel> =>{
        const response = await apiService.get(urls.genres);
        return response.data;
    },
    getMoviesByGenre: async (genreId: number, page: number): Promise<IListResponseModel<IMovieModel>> => {
        const response =
            await apiService.get(urls.lists.full, {params: { with_genres: genreId, page: page}});
        return response.data;
    }
}
export {
    genreService
}