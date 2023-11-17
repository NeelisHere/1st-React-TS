import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: StateType = {
    tasks: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state: StateType, action: PayloadAction<TaskType>) => {
            state.tasks.push(action.payload)
            return state
        },
        editTask: (state: StateType, action: PayloadAction<TaskType>) => {
            state.tasks.forEach((task) => {
                if (task.id === action.payload.id) {
                    task.title = action.payload.title
                    task.isCompleted = action.payload.isCompleted
                }
            })
            return state
        },
        deleteTask: (state: StateType, action: PayloadAction<string>) => ({
            ...state.tasks,
            tasks: state.tasks.filter((task) => task.id !== action.payload)
        }),

    }
})

export const { addTask, editTask, deleteTask } = taskSlice.actions
export default taskSlice