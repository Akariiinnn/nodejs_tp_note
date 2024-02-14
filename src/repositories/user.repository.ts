import { UserModel } from '../databases/models/user.model';

export const createUser = async (user: any) => {
    try {
        const newUser = await UserModel.create(user);
        return newUser;
    } catch (error) {
        throw error;
    }
}

export const getUserByEmail = async (email: string) => {
    try {
        const user = await UserModel.findOne({ email: email });
        return user;
    } catch (error) {
        throw error;
    }
}