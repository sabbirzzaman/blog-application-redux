import { createStore } from 'redux';
import reducer from './blog/reducer';

const store = createStore(reducer);

export default store;
