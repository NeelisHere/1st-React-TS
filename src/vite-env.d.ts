/// <reference types="vite/client" />

interface TaskType {
    readonly id: string,
    title: string,
    isCompleted: boolean
    creator?: UserType
} 

interface StateType {
    tasks: TaskType[]
}

interface UseSelectorStateType {
    tasks: {
        // tasks: TaskType[]
        tasks: FetchedTaskType[]
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
    loggedInUser: UserType | null,
    setLoggedInUser: React.Dispatch<React.SetStateAction<UserType | null>>
}

type FlexDirection = "column" | "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column-reverse" | "row" | "row-reverse" | undefined;

interface TaskContextType {
    myTasks: TaskType[] | null,
    setMyTasks: React.Dispatch<React.SetStateAction<TaskType[] | null>>
}

interface CreatorType {
    _id: string,
    username: string,
    email: string,
    password: string,
    __v: number
}

interface FetchedTaskType {
    _id: string,
    title: string,
    isCompleted: boolean,
    creator: CreatorType
    __v: number,
}

interface TaskStateType {
    tasks: FetchedTaskType[]
} 
