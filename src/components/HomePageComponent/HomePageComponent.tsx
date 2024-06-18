import React, {useEffect, useState} from 'react';
import {IMovieModel} from "../../models/IMovieModel";
import {movieService} from "../../services/movieService";
import ReactPlayer from "react-player/youtube";
import {urls} from "../../constants/urls";

const HomePageComponent = () => {
    const [film, setFilm] = useState<IMovieModel | null> (null);
    const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
    useEffect(() => {
        movieService.getOne(785).then(data => setFilm(data))
    }, []);
    useEffect(() => {
        movieService.getTrailer(568).then(({ results }) => {
            if (results && results.length > 0) {
                const youtubeUrl = urls.video+results[0].key;
                setTrailerUrl(youtubeUrl);
            }
        });
    }, []);
    useEffect(() => {
        movieService.endpointList(1, urls.lists.top_rated).then(data => console.log(data))
    }, []);

    return (
        <div>
            {film?.overview}
            <img src={urls.poster+film?.poster_path} alt={film?.title}/>
            {trailerUrl && (
                <div>
                    <ReactPlayer light={true}  playing={true} url={trailerUrl} controls={true} />

                </div>
            )}
        </div>
    );
};

export default HomePageComponent;