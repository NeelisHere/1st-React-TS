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

type UserType = {
    id: string,
    username: string,
    email: string
}

interface UserContextType {
    loggedInUser: UserType|null,
    setLoggedInUser: React.Dispatch<React.SetStateAction<UserType | null>>
}

type FlexDirection = "column" | "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column-reverse" | "row" | "row-reverse" | undefined;
