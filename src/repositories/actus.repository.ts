import { ActusModel } from "../databases/models/actus.model";

export const getActus = async () => {
    try {
        const actus = await ActusModel.find();
        if(!actus) { throw new Error('No actus found') }
        return actus;
    } catch (error) {
        throw error.toString()
    }
}

export const getActu = async (id: string) => {
    try {
        const actu = await ActusModel.findById(id);
        if(!actu) { throw new Error('No actus found') }
        return actu;
    } catch (error) {
        throw error.toString()
    }
}

export const createActu = async (actus: any) => {
    try {
        const newActu = await ActusModel.create(actus);
        return newActu;
    } catch (error) {
        throw error.toString()
    }
}