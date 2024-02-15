import * as UserService from "../services/user.service";
import * as jwtUtils from "../utils/jwt.utils";
import {jwtConfig} from "../configs/jwt.config";
import {ServerError, StatusCode} from "../utils/error.utils";

export const login = async (email: string, password: string) => {
    try {
        const user = await UserService.getUserByEmail(email);
        if (!user) {
            throw new ServerError(StatusCode.NOT_FOUND, "ERR-User-Not-Found", "user.err.notFound")
        }

        const isPasswordCorrect = jwtUtils.comparePassword(password, user.password);
        if (!isPasswordCorrect) {
            throw new ServerError(StatusCode.UNAUTHORIZED, "ERR-Invalid-Password", "user.error.invalidPassword")
        }

        const accessToken = jwtUtils.generateAccessToken({email: user.email, role: user.role});
        const refreshToken = jwtUtils.generateRefreshToken({email: user.email, role: user.role});
        return {accessToken, refreshToken};
    } catch (error) {
        throw error;
    }
};

export const logout = async (refreshToken: string) => {
    try {
        const decodedToken: any = jwtUtils.verifyToken(refreshToken, jwtConfig.refreshSecret);
        if (!decodedToken) throw new ServerError(StatusCode.UNAUTHORIZED, "ERR-Auth-Invalid-Token", "auth.err.invalidToken")
        return {message: "User successfully logged out"};
    } catch (error) {
        throw error.toString();
    }
}

export const refresh = async (oldRefreshToken: string, oldAccessToken: string) => {
    try {
        const decodedRefreshToken: any = jwtUtils.verifyToken(oldRefreshToken, jwtConfig.refreshSecret);
        const decodedAccessToken: any = jwtUtils.verifyToken(oldAccessToken, jwtConfig.secret);
        if (!decodedAccessToken || !decodedRefreshToken) throw new ServerError(StatusCode.UNAUTHORIZED, "ERR-Auth-Invalid-Token", "auth.err.invalidToken")
        const user = await UserService.getUserByEmail(decodedAccessToken.email);
        if (!user) throw new ServerError(StatusCode.NOT_FOUND, "ERR-User-Not-Found", "user.err.notFound");
        const accessToken = jwtUtils.generateAccessToken({email: user.email, role: user.role});
        const refreshToken = jwtUtils.generateRefreshToken({email: user.email, role: user.role});
        return {accessToken, refreshToken};
    } catch (error) {
        throw error.toString();
    }
}

export const checkRole = async (token: string, role: string) => {
    try {
        const decodedToken: any = jwtUtils.verifyToken(token, jwtConfig.secret);
        if (!decodedToken) throw new ServerError(StatusCode.UNAUTHORIZED, "ERR-Auth-Invalid-Token", "auth.err.invalidToken")
        if ((decodedToken.role !== role) && (decodedToken.role !== "admin")) throw new ServerError(StatusCode.UNAUTHORIZED, "ERR-Auth-Unauthorized", "auth.err.unauthorized")
        const user = await UserService.getUserByEmail(decodedToken.email);
        if (!user) throw new ServerError(StatusCode.NOT_FOUND, "ERR-User-Not-Found", "user.err.notFound");
        if ((user.role !== role) && (decodedToken.role !== "admin")) throw new ServerError(StatusCode.UNAUTHORIZED, "ERR-Auth-Unauthorized-RoleMismatch", "auth.err.unauthorized.rolemismatch")
        return decodedToken;
    } catch (error) {
        throw error;
    }
}