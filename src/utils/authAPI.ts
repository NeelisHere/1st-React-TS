import api from "./axios-api"

class AxiosAuthService {
    async loginAPI(payload: LoginFormValues) {
        return api.post('/auth/login', payload)
    }
    async registerAPI(payload: RegisterFormValues) {
        return api.post('/auth/register', payload)
    }
    async logoutAPI() {
        return api.get('/auth/logout')
    }
}

export default new AxiosAuthService()