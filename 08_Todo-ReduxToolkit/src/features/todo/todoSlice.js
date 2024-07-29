import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
                // "text: action.payload.text" : payload is object and 'text' key is there and it's being assigned to 'text' so due to same it's not required
            }
            state.todos.push(todo);
            // todos is defined in initial state
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // uppdateTodo: (state, action) => { }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;