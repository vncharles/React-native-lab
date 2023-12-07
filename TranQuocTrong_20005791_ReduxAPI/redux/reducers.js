// reducers.js
import * as types from './types';

const initialState = {
	todos: [],
	error: null,
};

const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_TODOS_SUCCESS:
			return {
				...state,
				todos: action.payload,
				error: null,
			};
		case types.ADD_TODO_SUCCESS:
			return {
				...state,
				todos: [...state.todos, action.payload],
				error: null,
			};
		case types.UPDATE_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, title: action.payload.title }
						: todo
				),
				error: null,
			};
		case types.DELETE_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
				error: null,
			};

		case types.FETCH_TODOS_FAILURE:
		case types.ADD_TODO_FAILURE:
		case types.UPDATE_TODO_FAILURE:
		case types.DELETE_TODO_FAILURE:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default todosReducer;
