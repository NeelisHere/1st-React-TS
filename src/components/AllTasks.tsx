import { useEffect, useMemo, useState } from "react"
// import toast from "react-hot-toast"
import { useSelector } from 'react-redux'
import Task from "./Task"

const AllTasks = () => {
    const { tasks: tasksFromRedux } = useSelector((state: UseSelectorStateType) => state.tasks)
    const [tasks, setTasks] = useState<TaskType[]|null>(null)
    // const [loading, setLoading] = useState<boolean>(false)

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

    return tasks? 
    (
        <div>
            <h1 style={{ textAlign: 'center' }}>All Tasks</h1>
            <div style={taskCardStyle}>
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
