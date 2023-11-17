import { useMemo } from 'react'

const Task = ({ task }: { task: TaskType }) => {
    const { id, title, isCompleted } = task

    const taskCardStyle = useMemo(() => ({
        border: '2px solid black',
        width: '500px',
        margin: '0 auto',
        padding: '10px',
        display: 'flex',
        gap: 24
    }), [])
    
    const buttonStyle = useMemo(() => ({
        padding: '0px 10px',
    }), [])

    return (
        <div style={taskCardStyle}>
            <input type="checkbox" checked={isCompleted} />
            <div>
                <h5>id: { id }</h5>
                <p>{ title }</p>
            </div>
            <button style={buttonStyle}>Edit</button>
            <button style={buttonStyle}>Delete</button>
        </div>
    )
}

export default Task
