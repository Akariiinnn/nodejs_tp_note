import {ActusModel} from "../databases/models/actus.model";

export const getActus = async (filter = "", skip = 1, limit = 25) => {
    try {
        const actus = await ActusModel.find(
            {
                $or: [
                    {title: {$regex: filter, $options: 'i'}},
                    {content: {$regex: filter, $options: 'i'}},
                    {filters: {$regex: filter, $options: 'i'}}
                ]
            }
        ).skip(skip).limit(limit);

        return actus;
    } catch (error) {
        throw error
    }
}

export const getActu = async (id) => {
    try {
        const actu = await ActusModel.findById(id);
        if (!actu) {
            throw new Error('No actus found')
        }
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

export const getSuggestions = async (id) => {
    try {
        const actu = await ActusModel.findById(id)
        console.log(actu.filters[0])
        const suggestions = await ActusModel.find(
            {
                $or: [
                    {title: {$regex: actu.title, $options: 'i'}},
                    {content: {$regex: actu.content, $options: 'i'}},
                    {filters: {$regex: actu.filters[0], $options: 'i'}},
                    {filters: {$regex: actu.filters[1], $options: 'i'}}
                ]
            }
        ).skip(1).limit(3);;
        return suggestions;
    } catch (error) {
        throw error.toString()
    }
}