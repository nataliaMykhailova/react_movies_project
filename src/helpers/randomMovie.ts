import {IMovieModel} from "../models/IMovieModels/IMovieModel";

export const getRandomMovies = (movies: IMovieModel[], count: number): IMovieModel[] => {
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};