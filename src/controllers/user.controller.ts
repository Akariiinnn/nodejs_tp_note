import {Request, Response} from "express";
import * as UserService from "../services/user.service";

export const createUser = async (req: Request, res: Response) => {
    const user = req.body;
    try {
        const newUser = await UserService.createUser(user);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}