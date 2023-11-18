import { useEffect, useState, useMemo } from "react"
import { useSelector } from 'react-redux'
import Task from "./Task"
import authAPI from "../utils/authAPI"
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'


const AllTasks = () => {
    const { tasks: tasksFromRedux } = useSelector((state: UseSelectorStateType) => state.tasks)
    const [tasks, setTasks] = useState<TaskType[]|null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        setTasks(tasksFromRedux);
    }, [tasksFromRedux]);

    const taskCardStyle = useMemo(() => ({
        border: '2px solid black',
        width: '500px',
        margin: '0 auto',
        padding: '10px',
        display: 'flex',
        gap: 24,
        cursor: 'pointer'
    }), [])

    const handleLogout = async () => {
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

    return tasks? 
    (
        <div>
            <h1 style={{ textAlign: 'center' }}>All Tasks</h1>
            <div style={taskCardStyle}>
                <div>
                    <p>{ loading? <>loading...</> : null }</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                {
                    tasks.map((task) => <Task key={task.id} task={task} />)
                }
            </div>
        </div>
    ) 
    : 
    <h1>Loading...</h1>
}

export default AllTasks
