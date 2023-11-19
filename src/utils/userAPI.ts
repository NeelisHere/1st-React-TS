import api from "./axios-api"

class AxiosUserService {
    async currentlyLoggedInUserAPI() {
        return api.get('/users')
    }
}

export default new AxiosUserService()