import { useState, useMemo, FormEvent } from "react"
import { nanoid } from 'nanoid'
import { addTask } from "../slices/taskSlice"
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
    const [title, setTitle] = useState<string>('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formStyle = useMemo(() => ({
        width: '300px',
        margin: '0 auto',
        border: '2px solid black',
        padding: '10px'
    }), [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const payload: TaskType = {
            id: nanoid(),
            title,
            isCompleted: false
        }
        // console.log(payload)
        dispatch(addTask(payload))
        navigate('/')
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Create Task</h1>
            <form 
                style={formStyle} 
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    handleSubmit(e)
                }}
            >
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateTask
