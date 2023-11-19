import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";
import axiosUserService from '../utils/userAPI';


const UserContext = createContext<UserContextType|null>(null)

export const LoggedInUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider')
    }
    return context
}

const UserContextProvider = ({ children }:{ children: ReactNode }) => {
    const [loggedInUser, setLoggedInUser] = useState<UserType|null>(null)
    // const dispatch = useDispatch()

    // const fetchTasksHandler = useCallback(async () => {
    //     try {
    //         const { data } = await axiosTaskService.fetchTasksAPI();
    //         dispatch(fetchTasks(data.tasks));
    //         console.log('>>', data.tasks)
    //     } catch (error) {
    //         console.log('Error fetching tasks:', error);
    //     }
    // }, [dispatch]);

    const handleCurrentlyLoggedInUser = useCallback(async() => {
        const { data } = await axiosUserService.currentlyLoggedInUserAPI()
        const userTemp: UserType = {
            id: data.user._id,
            username: data.user.username,
            email: data.user.email
        }
        setLoggedInUser(userTemp)
    }, [])

    useEffect(() => {
        // fetchTasksHandler()
        if (!loggedInUser) {
            handleCurrentlyLoggedInUser()
        }
    }, [handleCurrentlyLoggedInUser, loggedInUser])

    return(
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContextProvider