import {IListResponseModel} from "../models/IListResponseModel";
import {IMovieModel} from "../models/IMovieModel";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IVideoResponseModel} from "../models/IVideoModels/IVideoResponseModel";


const movieService = {
    fullList: async (page:number):Promise<IListResponseModel<IMovieModel>> => {
        const response =
            await apiService.get(urls.lists.full, {params:{page:page}});
        return response.data;
    },
    getOne: async (movieId:number):Promise<IMovieModel> =>{
        const response = await apiService.get(urls.details(movieId));
        return response.data
    },
    getTrailer: async (movieId:number):Promise<IVideoResponseModel> =>{
        const response = await apiService.get(urls.trailer(movieId));
        return response.data
    },
    search: async (page:number, query:string):Promise<IListResponseModel<IMovieModel>> =>{
        const response =
            await apiService.get(urls.search(query), {params:{page:page}});
        return response.data
    },
    similar: async (page: number, movieId:number):Promise<IListResponseModel<IMovieModel>> =>{
        const response =
            await apiService.get(urls.similar(movieId), {params:{page:page}});
        return response.data
    },
    endpointList: async (page: number, endpoint:string):Promise<IListResponseModel<IMovieModel>> => {
        const response = await apiService.get(endpoint, {params:{page:page}});
        return response.data
}

}
export {
    movieService
}