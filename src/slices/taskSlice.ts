import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TaskStateType = {
    tasks: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state: TaskStateType, action: PayloadAction<FetchedTaskType>) => {
            state.tasks.push(action.payload)
            return state
        },
        fetchTasks: (state: TaskStateType, action: PayloadAction<FetchedTaskType[]>) => {
            state.tasks = [...state.tasks, ...action.payload]
            return state
        },
        editTask: (state: TaskStateType, action: PayloadAction<FetchedTaskType>) => {
            state.tasks.forEach((task) => {
                if (task._id === action.payload._id) {
                    task.title = action.payload.title
                    task.isCompleted = action.payload.isCompleted
                }
            })
            return state
        },
        deleteTask: (state: TaskStateType, action: PayloadAction<string>) => ({
            ...state.tasks,
            tasks: state.tasks.filter((task) => task._id !== action.payload)
        }),
    }
})

export const { addTask, fetchTasks, editTask, deleteTask } = taskSlice.actions
export default taskSlice