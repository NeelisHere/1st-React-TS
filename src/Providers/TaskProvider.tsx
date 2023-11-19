import { ReactNode, createContext, useCallback, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosTaskService from '../utils/taskAPI'
import { fetchTasks } from "../slices/taskSlice";

const TaskContext = createContext<null>(null)

export const GetMyTasks = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider')
    }
    return context
}

const TaskContextProvider = ({ children }:{ children: ReactNode }) => {
    const dispatch = useDispatch();

    const fetchTasksHandler = useCallback(async () => {
        try {
            const { data } = await axiosTaskService.fetchTasksAPI();
            dispatch(fetchTasks(data.tasks));
            // console.log(data.tasks)
        } catch (error) {
            console.log('Error fetching tasks:', error);
        }
    }, [dispatch]);
  
    useEffect(() => {
        fetchTasksHandler();
    }, [fetchTasksHandler]);

    return(
        <TaskContext.Provider value={null}>
            { children }
        </TaskContext.Provider>
    )
}

export default TaskContextProvider