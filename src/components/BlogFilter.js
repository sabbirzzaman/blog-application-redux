import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetFilter } from '../redux/filters/actions';

const BlogFilter = () => {
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const author = filters.authorFilter;
    const categories = filters.categoryFilter;

    const reset = () => {
        dispatch(resetFilter())
    }

    return (
        <div className="flex gap-4 flex-wrap items-center justify-end">
            <div>
                {author && (
                    <>
                        <div className="indicator">
                            <span className="indicator-item badge cursor-pointer">
                                <FontAwesomeIcon icon={faXmark} />
                            </span>
                            <button className="btn btn-sm bg-blue-500 border-none cursor-default hover:bg-blue-500">
                                {author}
                            </button>
                        </div>
                    </>
                )}
            </div>
            <div>
                {categories.map((category, index) => (
                    <div key={index} className="indicator">
                        <span className="indicator-item badge cursor-pointer">
                            <FontAwesomeIcon icon={faXmark} />
                        </span>
                        <button className="btn btn-sm bg-blue-500 border-none cursor-default hover:bg-blue-500">
                            {category}
                        </button>
                    </div>
                ))}
            </div>

            {(!author && !categories.length) || (
                <button onClick={reset} className="btn btn-sm btn-error text-white">
                    Reset Filter
                </button>
            )}
        </div>
    );
};

export default BlogFilter;
