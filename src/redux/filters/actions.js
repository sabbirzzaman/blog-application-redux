import { AUTHOR } from "./actionTypes"

export const addNewAuthor = (author) => {
    return {
        type: AUTHOR,
        payload: author,
    }
}

export const addNewCategory = (category) => {
    return {
        type: AUTHOR,
        payload: category,
    }
}