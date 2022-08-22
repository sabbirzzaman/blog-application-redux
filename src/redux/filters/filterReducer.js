import { AUTHOR_FILTER, CATEGORY_FILTER, RESET_FILTER } from './actionTypes';
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
