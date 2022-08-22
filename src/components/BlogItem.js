import React from 'react';
import { useDispatch } from 'react-redux';
import { authorFilter, categoryFilter } from '../redux/filters/actions';

const BlogItem = ({blog}) => {

    const dispatch = useDispatch();

    const filterByAuthor = (author) => {
        dispatch(authorFilter(author))
    }

    const filterByCategory = (category) => {
        dispatch(categoryFilter(category))
    }

    const {img, title, description, category, authorImg, authorName, publishDate, readTime} = blog;

    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <img
                    className="h-48 w-full object-cover"
                    src={img}
                    alt=""
                />
            </div>

            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <span onClick={(e) => filterByCategory(e.target.innerText)} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer">
                            {category}
                        </span>
                    </p>
                    <a href="/" className="block mt-1">
                        <p className="text-xl font-semibold text-gray-900">
                            {title}
                        </p>
                    </a>
                    <p className='mt-2 text-gray-500'>{description}</p>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full cursor-pointer"
                            src={authorImg}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p onClick={(e) => filterByAuthor(e.target.innerText)} className="text-sm font-medium text-gray-900 hover:underline cursor-pointer">
                            {authorName}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-16">{publishDate}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span> {readTime} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;
