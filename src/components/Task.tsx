import { MouseEvent, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteTask } from '../slices/taskSlice'


const Task = ({ task }: { task: TaskType }) => {
    const { id, title, isCompleted } = task
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const buttonStyle = useMemo(() => ({
        padding: '0px 10px',
    }), [])

    const handleEditButton = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        navigate(`/edit/${id}`)
    }

    const handleDeleteButton = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        dispatch(deleteTask(id))
        navigate(`/`)
    }

    return (
        <div >
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
