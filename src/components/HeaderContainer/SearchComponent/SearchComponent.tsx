import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import css from './SearchComponent.module.css'

type SearchFormInputs = {
    search: string;
};

const SearchComponent = () => {
    const { handleSubmit, register, reset } = useForm<SearchFormInputs>();
    const navigate = useNavigate();

    const submitSearch: SubmitHandler<SearchFormInputs> = (data) => {
        navigate(`/search/keyword/${encodeURIComponent(data.search.trim())}`);
        console.log(data.search.trim());
        reset();
    };

    return (
        <div className={css.search}>
            <form onSubmit={handleSubmit(submitSearch)}>
                <input
                    type="text"
                    placeholder="Search your interesting..."
                    {...register('search', { required: true })}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchComponent;