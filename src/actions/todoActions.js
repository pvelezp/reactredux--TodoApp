import {
  EDIT_TODO,
  EDITING_TODO,
  DELETE_TODO,
  ADD_TODO,
  GET_TODOS,
  TOGGLE_TODO,
} from "./types";

export const todoAddAction = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const getTodosAction = () => ({
  type: GET_TODOS,
});

export const deleteTodoAction = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const editingTodoAction = (todo) => ({
  type: EDITING_TODO,
  payload: todo,
});

export const todoEditAction = (name, id) => ({
  type: EDIT_TODO,
  name,
  id,
});

export const toggleTodoAction = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});
