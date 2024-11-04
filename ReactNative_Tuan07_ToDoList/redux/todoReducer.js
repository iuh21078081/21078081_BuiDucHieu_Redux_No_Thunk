// todoReducer.js
import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, DELETE_TODO, ADD_TODO, UPDATE_TODO } from './todoAction';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_TODOS_SUCCESS:
            return { ...state, loading: false, items: action.payload };
        case FETCH_TODOS_FAILURE:
            return { ...state, loading: false, error: action.error };
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
