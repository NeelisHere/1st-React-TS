import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editTask } from "../slices/taskSlice"
import axiosTaskService from '../utils/taskAPI'

const EditTask = () => {
    const { tasks: tasksFromRedux } = useSelector((state: UseSelectorStateType) => state.tasks)
    const [task, setTask] = useState<FetchedTaskType | null>(null)
    const { taskId } = useParams()
    const dispatch = useDispatch()
    const navigation = useNavigate()

    useEffect(() => {
        if (task === null) {
            const taskToBeEdited = tasksFromRedux.filter((task) => task._id === taskId)[0]
            setTask(taskToBeEdited);
            return () => {}
        }
    }, [task, taskId, tasksFromRedux]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await axiosTaskService.editTaskAPI(taskId!, { 
                title: task?.title, isCompleted:task?.isCompleted 
            })
            dispatch(editTask(task!))
            navigation('/')
            toast.success('Task updated successfully!')
        } catch (error) {
            console.log(error)
            toast.error('Error updating task!')
        }
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
