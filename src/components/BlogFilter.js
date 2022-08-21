import React from 'react';

const BlogFilter = () => {
    return (
        <div className="flex items-center gap-4 justify-end">
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 pr-2">
                <option selected>Author</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 ">
                <option selected>Category</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
    );
};

export default BlogFilter;
