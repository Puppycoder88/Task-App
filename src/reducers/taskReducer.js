import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTodo(state, action) {
            state.tasks.push(action.payload);
        },
        deleteTodo(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
    },
});

export const { addTodo, deleteTodo } = taskSlice.actions;
export default taskSlice.reducer;