import { Request, Response } from 'express';
import * as ActusService from '../services/actus.service';

export const getActus = async (req: Request, res: Response) => {
    const filter = req.query.filter.toString();
    const skip = req.query.skip.toString();
    const limit = req.query.limit.toString();
    try {
        const actus = await ActusService.getActus(filter, skip, limit);
        res.status(200).send(actus);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getActu = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const actu = await ActusService.getActu(id);
        res.status(200).send(actu);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const createActu = async (req: Request, res: Response) => {
    const actu = req.body;
    try {
        const newActu = await ActusService.createActu(actu);
        res.status(201).send(actu);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getSuggestions = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const suggestions = await ActusService.getSuggestions(id);
        res.status(200).send(suggestions);
    } catch (error) {
        res.status(500).send(error);
    }
}

/*
export const updateActu = async (req: Request, res: Response) => {
    const { id } = req.params;
    const actu = req.body;
    try {
        const updatedActu = await ActusService.updateActu(id, actu);
        res.status(200).send(actu);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteActu = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await ActusService.deleteActu(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
}
*/