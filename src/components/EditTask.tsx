import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { editTask } from "../slices/taskSlice"

const EditTask = () => {
    const { tasks: tasksFromRedux } = useSelector((state: UseSelectorStateType) => state.tasks)
    const [task, setTask] = useState<TaskType | null>(null)
    const { taskId } = useParams()
    const dispatch = useDispatch()
    const navigation = useNavigate()

    useEffect(() => {
        const taskToBeEdited = tasksFromRedux.filter((t) => t.id === taskId)[0]
        setTask(taskToBeEdited);
    }, [taskId, tasksFromRedux]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(editTask(task!))
        navigation('/')
    }

    return !task?
    <>Loading...</>
    :
    <div>
        <h1 style={{ textAlign: 'center' }}>Edit Task</h1>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <label htmlFor="task-title">Task Title</label>
            <input 
                type="text" 
                id="task-title"
                value={task.title} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setTask((prev) => ({ ...prev!, title: e.target.value }))
                }}
            />
            <label htmlFor="completion-status">Completion Status</label>
            <input 
                type="checkbox" 
                id="completion-status"
                checked={task.isCompleted} 
                onChange={(e) => {
                    setTask((prev) => ({ ...prev!, isCompleted: e.target.checked }))
                }}
            />
            <input type="submit" value="Submit" />
        </form>
    </div>
    
}

export default EditTask
