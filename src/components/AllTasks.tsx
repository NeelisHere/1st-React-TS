import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import Task from "./Task"

const AllTasks = () => {
    const { tasks: tasksFromRedux } = useSelector((state: UseSelectorStateType) => state.tasks)
    const [tasks, setTasks] = useState<TaskType[]|null>(null)

    useEffect(() => {
        setTasks(tasksFromRedux);
    }, [tasksFromRedux]);

    return tasks? 
    (
        <div>
            <h1 style={{ textAlign: 'center' }}>All Tasks</h1>
            {
                tasks.map((task) => <Task key={task.id} task={task} />)
            }
        </div>
    ) 
    : 
    <h1>Loading...</h1>
}

export default AllTasks
