import { combineReducers } from "redux";
import blogReducer from "./blogs/blogReducer";
import filtersReducer from "./filters/filterReducer";

const rootReducer = combineReducers({
    blogs: blogReducer,
    filters: filtersReducer,
})

export default rootReducer;