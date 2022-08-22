import React from 'react';
import { useSelector } from 'react-redux';

const BlogFilter = () => {
    const filters = useSelector(state => state.filters);

    console.log(filters.allAuthors)

    return (
        <div className="flex items-center gap-4 justify-end">
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 pr-2">
                <option defaultValue>All Author</option>
                {
                    filters?.allAuthors?.map((author, index) => (
                        <option key={index} value={author}>{author}</option>

                    ))
                }
            </select>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 ">
            <option defaultValue>All Category</option>
                {
                    filters?.allCategories?.map((category, index) => (
                        <option key={index} value={category}>{category}</option>

                    ))
                }
            </select>

            <button>Reset Filter</button>
        </div>
    );
};

export default BlogFilter;
