import * as UserRepo from '../repositories/user.repository';
import * as jwtUtils from '../utils/jwt.utils';
import {ServerError, StatusCode} from "../utils/error.utils";

export const modifyPassword = async (email: string, oldpassword: any, password: any) => {
    try {
        const user = await UserRepo.getUserByEmail(email);
        if (!user) throw new ServerError(StatusCode.NOT_FOUND, 'ERR-User-Not-Found', 'user.error.notFound');
        const isPasswordCorrect = jwtUtils.comparePassword(oldpassword, user.password);
        if (!isPasswordCorrect) throw new ServerError(StatusCode.UNAUTHORIZED, 'ERR-Invalid-Password', 'user.error.invalidPassword')
        const newPassword = jwtUtils.hashPassword(password);
        const updatedUser = await UserRepo.modifyPassword(email, newPassword);
        return updatedUser;
    } catch (error) {
        throw error;
    }
};


export const deleteUser = async (email: string) => {
    try {
        const user = await UserRepo.deleteUser(email);
        return user;
    }
    catch (error) {
        throw error;
    }
};


export const getUsers = async () => {
    try {
        const users = await UserRepo.getUsers();
        return users;
    } catch
        (error) {
        throw error
    }
};


export const createUser = async (user: any) => {

    const isExistingUser = await UserRepo.getUserByEmail(user.email);
    if (isExistingUser) throw new ServerError(StatusCode.CONFLICT, 'ERR-User-Already-Exists', 'user.error.alreadyExists');

    user.password = jwtUtils.hashPassword(user.password);
    user.role = 'user';

    try {
        const newUser = await UserRepo.createUser(user);
        return newUser;
    } catch (error) {
        throw error
    }
}

export const getUserByEmail = async (email: string) => {
    try {
        const user = await UserRepo.getUserByEmail(email);
        return user;
    } catch (error) {
        throw error
    }
}

