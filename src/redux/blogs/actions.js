import { ADD_NEW_BLOG } from "./actionTypes"

export const postNewBlog = (img, title, description, category, authorName, authorImg) => {
    return {
        type: ADD_NEW_BLOG,
        payload: {
            img, title, description, category, authorName, authorImg
        }
    }
}