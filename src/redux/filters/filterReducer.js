import { AUTHOR, CATEGORY } from './actionTypes';
import { initialState } from './initialState';

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHOR: {
            const isMatched = action.allAuthors.find(
                (author) => author === action.payload
            );

            if (!isMatched) {
                return {
                    ...state,
                    allAuthors: [...state.allAuthors, action.payload],
                };
            } else {
                return state;
            }
        }

        case CATEGORY: {
            const isMatched = action.allCategories.find(
                (category) => category === action.payload
            );

            if (!isMatched) {
                return {
                    ...state,
                    allCategories: [...state.allCategories, action.payload],
                };
            } else {
                return state;
            }
        }
        default:
            return state;
    }
};

export default filtersReducer;
