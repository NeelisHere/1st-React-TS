class UserController {
    async getAllUsers(req, res) {
        res.json({
            success: true,
            users: []
        });
    }
    async getUser(req, res) {
        res.json({
            success: true,
            users: [req.params.userId]
        });
    }
}
export default new UserController();
