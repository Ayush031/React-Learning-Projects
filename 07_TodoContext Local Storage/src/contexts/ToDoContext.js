import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todo: [{
        id: 1,
        title: 'Test',
        completed: false,
    }],
    addTodo: (title, id) => { },
    updateTodo: (title, id) => { },
    deleteTodo: (id) => { },
    toggleCompleted: (id) => { },
})

export const ToDoProvider = ToDoContext.Provider;

export const useTodo = () => {
    return useContext(ToDoContext)
}

