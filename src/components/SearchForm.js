import React from 'react';
import SearchIcon from '../images/search.svg';
import { useDispatch } from 'react-redux';
import { searchBlog } from '../redux/filters/actions';

const SearchForm = () => {
    const dispatch = useDispatch();

    const debouncedHandler = (fn, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                fn(...args);
            }, delay);
        };
    };

    const getSearchKey = (value) => {
        dispatch(searchBlog(value))
    }

    const debounceGetKey = debouncedHandler(getSearchKey, 500);

    return (
        <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                onChange={(e) => debounceGetKey(e.target.value)}
                placeholder="Search"
            />
            <img
                className="inline h-6 cursor-pointer"
                src={SearchIcon}
                alt="Search"
            />
        </div>
    );
};

export default SearchForm;
