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

interface LoginFormValues {
    username: string,
    password: string
}

interface RegisterFormValues {
    username: string,
    email: string,
    password: string
}