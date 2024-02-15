import {UserModel} from '../databases/models/user.model';

export const modifyPassword = async (email: string, newPassword: string) => {
    try {
        const user = await UserModel.findOneAndUpdate({email: email}, {password: newPassword});
        return user;
    } catch (error) {
        throw error;
    }
};


export const deleteUser = async (email: string) => {
    try {
        const user = await UserModel.findByIdAndDelete(email);
        return user;
    } catch (error) {
        throw error;
    }
};


export const getUsers = async () => {
    try {
        const users = await UserModel.find().skip(0).limit(10);
        return users;
    } catch (error) {
        throw error;
    }
};


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
        const user = await UserModel.findOne({email: email});
        return user;
    } catch (error) {
        throw error;
    }
}