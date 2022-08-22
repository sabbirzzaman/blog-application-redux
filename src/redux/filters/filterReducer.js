import { AUTHOR_FILTER, CATEGORY_FILTER, DELETE_FILTER_A, DELETE_FILTER_C, RESET_FILTER } from './actionTypes';
import { initialState } from './initialState';

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHOR_FILTER: {
            return {
                ...state,
                authorFilter: action.payload,
            };
        }

        case CATEGORY_FILTER: {
            const isMatched = state.categoryFilter.find(
                (category) => category === action.payload
            );
            if (!isMatched) {
                return {
                    ...state,
                    categoryFilter: [...state.categoryFilter, action.payload],
                };
            } else {
                return state;
            }
        }

        case DELETE_FILTER_A:
            return {
                ...state,
                authorFilter: '',
            };

        case DELETE_FILTER_C:
            return {
                ...state,
                categoryFilter: [].filter(item => item !== action.payload),
            };

        case RESET_FILTER:
            return {
                ...state,
                authorFilter: '',
                categoryFilter: [],
            };
        default:
            return state;
    }
};

export default filtersReducer;
