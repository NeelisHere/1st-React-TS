/// <reference types="vite/client" />

interface TaskType {
    readonly id: string,
    title: string,
    isCompleted: boolean
} 

interface StateType {
    tasks: TaskType[]
}

interface UseSelectorStateType {
    tasks: {
        tasks: TaskType[]
    }
}