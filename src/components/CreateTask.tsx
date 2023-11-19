import { FormEvent, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addTask } from "../slices/taskSlice";
import axiosTaskService from '../utils/taskAPI';

const CreateTask = () => {
    const [title, setTitle] = useState<string>('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)

    const formStyle = useMemo(() => ({
        width: '300px',
        margin: '0 auto',
        border: '2px solid black',
        padding: '10px'
    }), [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!title) return;
        try {
            setLoading(true)
            const { data } = await axiosTaskService.createTaskAPI({ title })
            dispatch(addTask(data.task))
            navigate('/')
        } catch (error) {
            console.log(error)
            toast.error('Error creating task!')
        } finally {
            setLoading(true)
        }
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
                {
                    loading? <>Loading...</> : null
                }
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
