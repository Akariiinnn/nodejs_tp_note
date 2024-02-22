import * as ActusRepository from '../repositories/actus.repository';
import {ServerError, StatusCode} from "../utils/error.utils";

export const deleteActu = async (id: string) => {
    try {
        const deletedActu = await ActusRepository.deleteActu(id);
        return deletedActu;
    } catch (error) {
        throw error
    }
};


export const updateActu = async (id: string, actu: any) => {
    try {
        const updatedActu = await ActusRepository.updateActu(id, actu);
        return updatedActu;
    } catch (error) {
        throw error
    }
};


export const getActus = async (filter, skip, limit) => {
    try {
        const actus = await ActusRepository.getActus(filter, skip, limit);
        if(!actus) { throw new ServerError(StatusCode.NOT_FOUND, 'ERR-Actus-Not-Found', 'actus.error.notFound') }
        return actus;
    } catch (error) {
        throw error
    }
}

export const getActu = async (id) => {
    try {
        const suggestions = await ActusRepository.getSuggestions(id);
        const actu = await ActusRepository.getActu(id);
        if(!actu) { throw new ServerError(StatusCode.NOT_FOUND, 'ERR-Actu-Not-Found', 'actu.error.notFound')}
        return actu;
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

export const getSuggestions = async (id) => {
    try {
        const suggestions = await ActusRepository.getSuggestions(id);
        return suggestions;
    } catch (error) {
        throw error
    }
}