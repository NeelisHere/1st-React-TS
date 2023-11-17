import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'

const AllTasks = () => {
    const { tasks: tasksFromRedux } = useSelector((state: UseSelectorStateType) => state.tasks)
    const [tasks, setTasks] = useState<TaskType[]|null>(null)

    useEffect(() => {
        setTasks(tasksFromRedux);
    }, [tasksFromRedux]);

    return tasks? 
    (
        <div>
            {
                tasks.map((task) => <div>{ task.title }</div>)
            }
        </div>
    ) 
    : 
    <h1>Loading...</h1>
}

export default AllTasks
