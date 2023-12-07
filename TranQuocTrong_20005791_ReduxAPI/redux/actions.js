// actions.js
import axios from 'axios';
import * as types from './types';

const API_URL = 'https://654cf5ea77200d6ba859c783.mockapi.io/api/v1/todo';

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_URL);
      dispatch({ type: types.FETCH_TODOS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const addTodo = (title) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_URL, { title });
      dispatch({ type: types.ADD_TODO_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.ADD_TODO_FAILURE, payload: error.message });
    }
  };
};

export const updateTodo = (id, title) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, { title });
      dispatch({ type: types.UPDATE_TODO_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: types.UPDATE_TODO_FAILURE, payload: error.message });
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      dispatch({ type: types.DELETE_TODO_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: types.DELETE_TODO_FAILURE, payload: error.message });
    }
  };
};
