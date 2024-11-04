export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

const apiLink = 'https://6703edfdab8a8f8927323f9c.mockapi.io/api/todolist';

export const fetchTodos = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_TODOS_REQUEST });
        try {
            const response = await fetch(apiLink);
            const data = await response.json();
            dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_TODOS_FAILURE, error: error.message });
        }
    };
};

export const deleteTodo = (id) => {
    return async (dispatch) => {
        await fetch(`${apiLink}/${id}`, { method: 'DELETE' });
        dispatch({ type: DELETE_TODO, payload: id });
    };
};

export const addTodo = (title) => {
    return async (dispatch) => {
        await fetch(apiLink, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, status: false }),
        });
        dispatch({type: ADD_TODO, payload: title});
    };
}

export const updateJob = (item) => {
    return async (dispatch) => {
        await fetch(`${apiLink}/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {   id: item.id,
                    title: item.title,
                    status: item.status
                }),
        });
        dispatch({type: ADD_TODO, payload: item});
    };
}