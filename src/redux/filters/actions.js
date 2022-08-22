import { AUTHOR_FILTER, CATEGORY_FILTER, RESET_FILTER } from "./actionTypes"

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