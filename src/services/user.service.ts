import * as UserRepo from '../repositories/user.repository';
import * as jwtUtils from '../utils/jwt.utils';

export const createUser = async (user: any) => {

    const isExistingUser = await UserRepo.getUserByEmail(user.email);

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

