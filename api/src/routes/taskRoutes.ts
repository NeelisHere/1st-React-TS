import express from 'express'
import taskController from '../controllers/taskController.js'

const taskRouter = express.Router()

taskRouter.route('/all').get(taskController.getTasks)
taskRouter.route('/:taskId').get(taskController.getTaskById)
taskRouter.route('/add').post(taskController.addTask)
taskRouter.route('/edit').put(taskController.editTask)
taskRouter.route('/delete').delete(taskController.deleteTask)

export default taskRouter