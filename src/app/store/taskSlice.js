import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []  // Asegura que siempre es un array vacío
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
            },
        removeTask(state, action) {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        updateTask(state, action) {
            const { id, status } = action.payload;
            const index = state.tasks.findIndex(task => task.id === id);
        
            if (index !== -1) {
                state.tasks[index].status = status; // Solo actualizamos el status
            }
        },
        setTasks(state, action) { // <-- Nuevo reducer para establecer tareas al inicializar
            state.tasks = action.payload;
        }
    }
});
export const { addTask, removeTask, updateTask, setTasks } = taskSlice.actions;
export default taskSlice.reducer;  //export the reducer to be used in the store.  //