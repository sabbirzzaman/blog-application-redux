import { ADD_NEW_BLOG } from './actionTypes';
import { initialState } from './initialState';

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_BLOG:
            const date = new Date().toString().split(' ')
            const currentDate = `${date.slice(2, 3)} ${date.slice(1, 2)}, ${date.slice(3, 4)}`;

            return [
                ...state,
                {
                    id: 8,
                    img: action.payload.img,
                    title: action.payload.title,
                    description: action.payload.description,
                    category: action.payload.category,
                    authorName: action.payload.authorName,
                    authorImg: action.payload.authorImg,
                    publishDate: currentDate,
                    readTime: '0 min read',
                },
            ];
        default:
            return state;
    }
};

export default blogReducer;
