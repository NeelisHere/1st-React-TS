import api from "./axios-api"

class AxiosTaskService {
    async createTaskAPI(payload: { title: string }) {
        return api.post('/tasks/add', payload)
    }
    async fetchTasksAPI() {
        return api.get('/tasks/all')
    }
}

export default new AxiosTaskService()