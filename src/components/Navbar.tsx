import { useMemo, useState, useCallback, MouseEvent, useEffect } from "react"
import toast from "react-hot-toast"
import { NavLink, useNavigate } from 'react-router-dom'
import authAPI from "../utils/authAPI"
import User from "./User"
import { fetchTasks } from "../slices/taskSlice";
import axiosTaskService from '../utils/taskAPI';
import { useDispatch } from "react-redux"
import { LoggedInUser } from "../Providers/UserProvider"


const Navbar = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loggedInUser } = LoggedInUser()

    const fetchTasksHandler = useCallback(async() => {
        const { data: fetchedData } = await axiosTaskService.fetchTasksAPI();
        dispatch(fetchTasks(fetchedData.tasks));
    }, [dispatch, loggedInUser])

    useEffect(() => {
        fetchTasksHandler()
    }, [dispatch, fetchTasksHandler])

    const navbarStyle = useMemo(() => {
        return { 
            border: '2px solid green', 
            padding: '5px',
            width: '100%',
        }
    }, [])

    const handleLogout = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data } = await authAPI.logoutAPI()
            toast.success(data.message)
            navigate('/auth/login')
        } catch (error) {
            console.log(error)
            toast.error('Error logging out!')
        } finally {
            setLoading(false)
        }
    }

    const activeStyle = useCallback(
        ({ isActive }:{ isActive: boolean }) => isActive ? { color: 'red' } : {}, []
    )

    return (
        <div style={navbarStyle}>
            {
                loading ?
                <p>Loading...</p>
                :
                <div>
                    <NavLink to={'/'} style={ activeStyle }>Home</NavLink>
                    <NavLink to={'/create'} style={ activeStyle }>Create</NavLink>
                </div>
            }
            <div>
                {
                    loading? <p>loading...</p> : <User />  
                }
                <button onClick={(e) => {handleLogout(e)}}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
