import {IMovieModel} from "./IMovieModel";

export interface IActorModel {
    adult: boolean,
    gender: number,
    id: number,
    known_for: IMovieModel[],
    known_for_department: string,
    name: string,
    popularity: number,
    profile_path: string
}