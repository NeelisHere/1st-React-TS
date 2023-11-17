import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: StateType = {
    tasks: [
        // { id: '1', title: 'test-1', isCompleted: false},
        // { id: '2', title: 'test-2', isCompleted: false},
        // { id: '3', title: 'test-3', isCompleted: false},
    ]
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state: StateType, action: PayloadAction<TaskType>) => {
            state.tasks.push(action.payload)
            return state
        }
        // editTask: (state, action: PayloadAction<TaskType>) => {},
        // deleteTask: (state, action: PayloadAction<TaskType>) => {},

    }
})

export const { addTask } = taskSlice.actions
export default taskSlice