import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../slices/taskSlice";
import axiosTaskService from '../utils/taskAPI'

const useFetchAllTasks = () => {
    const dispatch = useDispatch()

    const fetchTasksHandler = useCallback(async () => {
        try {
            const { data } = await axiosTaskService.fetchTasksAPI();
            dispatch(fetchTasks(data.tasks));
            console.log('>>', data.tasks)
        } catch (error) {
            console.log('Error fetching tasks:', error);
        }
    }, [dispatch]);
  
    useEffect(() => {
        fetchTasksHandler();
    }, [fetchTasksHandler]);
}

export default useFetchAllTasks