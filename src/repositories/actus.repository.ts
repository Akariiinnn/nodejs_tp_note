import {ActusModel} from "../databases/models/actus.model";
import {ServerError} from "../utils/error.utils";

export const addComment = async (id: string, comment: any, user) => {
    try {
        console.log(comment.comment)
        const newComments = await ActusModel.findByIdAndUpdate(
            {_id: id},
            {
                $push: {
                    comments: {
                        user: user.email,
                        content: comment.comment,
                        created_at: Date.now()
                    }
                }
            }
        )
        const newActu = await ActusModel.findById(id);
        return newActu;
    } catch (error) {
        throw error.toString()
    }
}


export const deleteActu = async (id: string) => {
    try {
        await ActusModel.findByIdAndDelete(id);
    } catch (error) {
        throw error.toString()
    }
};


export const updateActu = async (id: string, actu: any) => {
    try {
        await ActusModel.findByIdAndUpdate(id, {
            title: actu.title,
            content: actu.content,
            filters: actu.filters,
            modified_at: Date.now()
        });

        const updatedActu = await ActusModel.findById(id);
        return updatedActu;
    } catch (error) {
        throw error.toString()
    }
};


export const getActus = async (filter = "", skip = 0, limit = 25) => {
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
            throw new ServerError(404, 'ERR-Actu-Not-Found', 'actu.error.notFound')
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
        ).skip(1).limit(3);
        ;
        return suggestions;
    } catch (error) {
        throw error.toString()
    }
}