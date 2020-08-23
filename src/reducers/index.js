import {
  EDITING_TODO,
  DELETE_TODO,
  ADD_TODO,
  GET_TODOS,
  EDIT_TODO,
  TOGGLE_TODO,
} from "../actions/types";

const initialState = {
  todos: [
    { id: 1, name: "Wash the dishes", completed: false },
    { id: 2, name: "Study react", completed: false },
    { id: 3, name: "Go to the gym", completed: false },
  ],
  todoupdate: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case GET_TODOS:
      return {
        ...state,
        todos: state.todos,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDITING_TODO:
      return {
        ...state,
        todoupdate: action.payload,
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              id: action.id,
              name: action.name,
            };
          } else {
            return todo;
          }
        }),
        todoupdate: null,
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
}
