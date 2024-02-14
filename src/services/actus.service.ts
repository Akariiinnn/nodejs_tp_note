import * as ActusRepository from '../repositories/actus.repository';

export const getActus = async () => {
    try {
        const tasks = await ActusRepository.getActus();
        if(!tasks) { throw new Error('No actus found') }
        return tasks;
    } catch (error) {
        throw error
    }
}

export const getActu = async (id: string) => {
    try {
        const task = await ActusRepository.getActu(id);
        if(!task) { throw new Error('No actus found') }
        return task;
    } catch (error) {
        throw error
    }
}

export const createActu = async (actus: any) => {
    try {
        const newActu = await ActusRepository.createActu(actus);
        return newActu;
    } catch (error) {
        throw error
    }
}