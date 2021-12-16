import { createSlice } from '@reduxjs/toolkit';

let todoCounter = 1;

const todosSlice = createSlice({
  name: 'TODOS',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({ ...action.payload, id: todoCounter++ });
    },
    deleteTodo(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    changeDescription(state, action) {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.description = action.payload.description;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, changeDescription } = todosSlice.actions;
export const { reducer: todosReducer } = todosSlice;
