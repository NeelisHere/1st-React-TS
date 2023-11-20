import api from "./axios-api"

class AxiosTaskService {
    async createTaskAPI(payload: { title: string }) {
        return api.post('/tasks/add', payload)
    }
    async fetchTasksAPI() {
        return api.get('/tasks/all')
    }
    async deleteTaskAPI(taskId: string) {
        return api.delete(`/tasks/delete/${taskId}`)
    }
    async editTaskAPI(
        taskId: string, 
        payload: { title: string|undefined, isCompleted: boolean|undefined }) {
        return api.put(`/tasks/edit/${taskId}`, payload)
    }
}

export default new AxiosTaskService()