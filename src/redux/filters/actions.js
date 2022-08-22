import { AUTHOR_FILTER, CATEGORY_FILTER, DELETE_FILTER_A, DELETE_FILTER_C, RESET_FILTER } from "./actionTypes"

export const authorFilter = (author) => {
    return {
        type: AUTHOR_FILTER,
        payload: author
    }
}

export const categoryFilter = (category) => {
    return {
        type: CATEGORY_FILTER,
        payload: category
    }
}

export const resetFilter = () => {
    return {
        type: RESET_FILTER,
    }
}

export const deleteFilterAuthor = () => {
    return {
        type: DELETE_FILTER_A,
    }
}

export const deleteFilterCategory = (value) => {
    return {
        type: DELETE_FILTER_C,
        payload: value,
    }
}