import { Request, Response } from 'express';
import * as ActusService from '../services/actus.service';
import {sendError, sendManuallyError, ServerError} from "../utils/error.utils";

export const getActus = async (req: Request, res: Response) => {
    const filter = req.query.filter.toString();
    const skip = req.query.skip.toString();
    const limit = req.query.limit.toString();
    try {
        const actus = await ActusService.getActus(filter, skip, limit);
        res.status(200).send(actus);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, "actus.err.unhandled", "ERR-Actus-Get-All")
        }
    }
}

export const getActu = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const actu = await ActusService.getActu(id);
        res.status(200).send(actu);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, "actus.err.unhandled", "ERR-Actus-Get-One")
        }
    }
}

export const createActu = async (req: Request, res: Response) => {
    const actu = req.body;
    try {
        const newActu = await ActusService.createActu(actu);
        res.status(201).send(actu);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, "actus.err.unhandled", "ERR-Actus-Create")
        }
    }
}

export const getSuggestions = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const suggestions = await ActusService.getSuggestions(id);
        res.status(200).send(suggestions);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, "actus.err.unhandled", "ERR-Actus-Suggestions")
        }
    }
}


export const updateActu = async (req: Request, res: Response) => {
    const id  = req.body.id;
    const actu = req.body;
    try {
        const updatedActu = await ActusService.updateActu(id, actu);
        res.status(200).send(updatedActu);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, "actus.err.unhandled", "ERR-Actus-Update")

        }
    }
}


export const deleteActu = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await ActusService.deleteActu(id);
        res.status(200).send(`Actu with id: ${id} got deleted successfully`);
    } catch (error) {
        if(error instanceof ServerError) {
            sendError(res, error);
        } else {
            sendManuallyError(res, 500, "actus.err.unhandled", "ERR-Actus-Delete")
        }
    }
}