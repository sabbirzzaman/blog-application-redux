import React from 'react';
import { postNewBlog } from '../redux/blogs/actions';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const BlogPostForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();

    const addNewPost = (data) => {
        const { img, title, description, category, authorName, authorImg } = data;

        dispatch(
            postNewBlog(
                img,
                title,
                description,
                category,
                authorName,
                authorImg
            )
        );

        reset();
    };

    return (
        <>
            <label htmlFor="my-modal" className="btn modal-button bg-blue-500 text-white border-none hover:bg-blue-500">
                Post New Blog
            </label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />

            <form onSubmit={handleSubmit(addNewPost)} className="modal">
                <div className="modal-box relative">
                <label htmlFor="my-modal" className="btn btn-sm bg-blue-500 border-none btn-circle absolute right-2 top-2 hover:bg-blue-500">✕</label>
                    <input
                        type="text"
                        placeholder="Thumbnail URL"
                        className="input input-bordered w-full mb-4 mt-10"
                        {...register('img')}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Blog Title"
                        className="input input-bordered w-full mb-4"
                        {...register('title')}
                        required
                    />
                    <textarea
                        className="textarea textarea-bordered w-full resize-none mb-4"
                        placeholder="Blog Description"
                        {...register('description')}
                        required
                    ></textarea>

                    <input
                        type="text"
                        placeholder="Category"
                        className="input input-bordered w-full mb-4"
                        {...register('category')}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full mb-4"
                        {...register('authorName')}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Your Avatar URL"
                        className="input input-bordered w-full mb-4"
                        {...register('authorImg')}
                        required
                    />

                    <div className="modal-action">
                        <input
                            type="submit"
                            value="Post Blog"
                            className="btn bg-blue-500 text-white border-none hover:bg-blue-500"
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export default BlogPostForm;
