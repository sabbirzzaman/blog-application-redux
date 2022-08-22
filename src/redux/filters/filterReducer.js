import { AUTHOR_FILTER, CATEGORY_FILTER, DELETE_FILTER_A, DELETE_FILTER_C, RESET_FILTER, SEARCH } from './actionTypes';
import { initialState } from './initialState';

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH: {
            return {
                ...state,
                searchKey: action.payload,
            };
        }

        case AUTHOR_FILTER: {
            return {
                ...state,
                authorFilter: action.payload,
            };
        }

        case CATEGORY_FILTER: {
            return {
                ...state,
                categoryFilter: action.payload,
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
                categoryFilter: '',
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
