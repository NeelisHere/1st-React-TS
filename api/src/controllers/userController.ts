import { Request, Response } from "express";

class UserController {
    async getAllUsers(req: Request, res: Response) {
        res.json({
            success: true,
            users: []
        })
    }
    async getUser(req: Request, res: Response) {
        res.json({
            success: true,
            users: [ req.params.userId ]
        })
    }
}

export default new UserController();