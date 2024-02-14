import * as ActusRepository from '../repositories/actus.repository';

export const getActus = async (filter, skip, limit) => {
    try {
        const actus = await ActusRepository.getActus(filter, skip, limit);
        if(!actus) { throw new Error('No actus found') }
        return actus;
    } catch (error) {
        throw error
    }
}

export const getActu = async (id) => {
    try {
        const suggestions = await ActusRepository.getSuggestions(id);
        const actu = await ActusRepository.getActu(id);
        if(!actu) { throw new Error('No actus found') }
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