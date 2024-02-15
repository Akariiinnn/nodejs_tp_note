import {Request, Response} from "express";
import * as UserService from "../services/user.service";
import {sendError, sendManuallyError, ServerError} from "../utils/error.utils";

export const createUser = async (req: Request, res: Response) => {
    const user = req.body;
    try {
        const newUser = await UserService.createUser(user);
        res.status(201).send(newUser);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), "ERR-Global");
        }
    }
}

export const getUserByEmail = async (req: Request, res: Response) => {
    const email = req.params.email;
    try {
        const user = await UserService.getUserByEmail(email);
        res.status(200).send(user);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), "ERR-Global");
        }
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserService.getUsers();
        res.status(200).send(users);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), "ERR-Global");
        }
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const email = req.params.email;
    try {
        const user = await UserService.deleteUser(email);
        res.status(200).send(user);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), "ERR-Global");
        }
    }
}

export const modifyPassword = async (req: Request, res: Response) => {
    const email = req.body.email;
    const oldPassword = req.body.oldPassword;
    const password = req.body.newPassword;
    try {
        const user = await UserService.modifyPassword(email, oldPassword, password);
        res.status(200).send(user);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), "ERR-Global");
        }
    }
}