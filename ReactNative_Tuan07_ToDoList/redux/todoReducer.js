// todoReducer.js
import { FETCH_TODOS , DELETE_TODO, ADD_TODO, UPDATE_TODO } from './todoAction';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return { ...state, loading: false, items: action.payload };
        case ADD_TODO:
            return { ...state, items: [...state.items, action.payload] };
        case UPDATE_TODO:
            return { ...state, items: state.items.map((item) => item.id === action.payload.id ? action.payload : item) };
        case DELETE_TODO:
            return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
        default:
            return state;
    }
};

export default todoReducer;
