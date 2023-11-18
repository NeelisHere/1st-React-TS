import mongoose from "mongoose";

const schema = {
    username:{
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
}

const taskSchema = new mongoose.Schema(schema)
const TaskModel = mongoose.model('Task', taskSchema)
export default TaskModel