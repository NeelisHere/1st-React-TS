import { MouseEvent, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteTask } from '../slices/taskSlice'
import axiosTaskService from '../utils/taskAPI'
import toast from 'react-hot-toast'


const Task = ({ task }: { task: FetchedTaskType }) => {
    const { _id: id, title, isCompleted } = task
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const buttonStyle = useMemo(() => ({
        padding: '0px 10px',
    }), [])

    const handleEditButton = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        try {
            navigate(`/edit/${id}`)
        } catch (error) {
            console.log(error)
            toast.error('Error deleting task!')
        }
    }

    const handleDeleteButton = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        try {
            await axiosTaskService.deleteTaskAPI(id)
            dispatch(deleteTask(id))
            navigate(`/`)
            toast.success('Task deleted successfully!')
        } catch (error) {
            console.log(error)
            toast.error('Error deleting task!')
        }
    }

    const taskBoxStyle = useMemo(() => ({
        border: '2px solid green',
        padding: '5px',
        margin: '5px'
    }), [])

    return (
        <div style={taskBoxStyle}>
            <input type="checkbox" checked={isCompleted} />
            <div>
                <h5>id: { id }</h5>
                <p>{ title }</p>
            </div>
            <button style={buttonStyle} onClick={(e) => {handleEditButton(e)}}>Edit</button>
            <button style={buttonStyle} onClick={(e) => {handleDeleteButton(e)}}>Delete</button>
        </div>
    )
}

export default Task
