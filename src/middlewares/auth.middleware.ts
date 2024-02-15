import * as jwtUtils from '../utils/jwt.utils';
import {Request, Response, NextFunction} from 'express';
import {jwtConfig} from "../configs/jwt.config";
import * as AuthService from '../services/auth.service';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization.replace('Bearer ', '');
        if (!token) throw new Error("No token provided");

        const decodedToken: any = jwtUtils.verifyToken(token, jwtConfig.secret);
        if (!decodedToken) throw new Error("Invalid token");

        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(401).send(error.toString());
    }
}

export const checkRole = (role: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization.replace('Bearer ', '');
            if (!token) throw new Error("No token provided");
            const decodedToken = await AuthService.checkRole(token, role);

            next()
        } catch (error) {
            res.status(401).send(error.toString());
        }
    }
}
