import React from 'react';
import { useSelector } from 'react-redux';
import BlogFilter from './BlogFilter';
import BlogItem from './BlogItem';
import BlogPostForm from './BlogPostForm';
import BlogTitle from './BlogTitle';

const BlogList = () => {
    const blogs = useSelector((state) => state.blogs);
    const filters = useSelector((state) => state.filters);

    const author = filters.authorFilter;
    const categories = filters.categoryFilter;

    return (
        <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-2">
                    <BlogTitle />
                    <BlogFilter />
                </div>

                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {blogs
                        .filter((blog) =>
                            author
                                ? blog.authorName.toLowerCase() ===
                                  author.toLowerCase()
                                : blog
                        )
                        .filter((blog) =>
                            categories.length
                                ? categories
                                      .map((category) => {
                                          return category.toLowerCase();
                                      })
                                      .includes(blog.category.toLowerCase())
                                : blog
                        )
                        .map((blog) => (
                            <BlogItem key={blog.id} blog={blog} />
                        ))}

                    <div className="flex items-center h-[488px] justify-center rounded-lg border-dashed border-blue-500 border-2">
                        <BlogPostForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogList;
