import { Request, Response } from 'express';
import * as AuthService from '../services/auth.service';
import {sendError, sendManuallyError, ServerError} from "../utils/error.utils";

export const refresh = async (req: Request, res: Response) => {
    try {
        const { refreshToken, accessToken } = req.body;
        const userTokens = await AuthService.refresh(refreshToken, accessToken);
        res.status(200).send(userTokens)
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), "ERR-Auth-Refresh");
        }
    }
};


export const login = async (req: Request, res: Response)=> {
    const { email, password } = req.body;
    try {
        const userTokens = await AuthService.login(email, password);
        res.status(200).send(userTokens)
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), "ERR-Auth-Login");
        }
    }
}

export const logout = async (req: Request, res: Response)=> {
    const { refreshToken } = req.body;
    try {
        const message = await AuthService.logout(refreshToken);
        res.status(200).send(message)
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, error.toString(), "ERR-Auth-Logout");
        }
    }
}