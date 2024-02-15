import { Response } from 'express';

export class ServerError extends Error {
    status: number;
    message: string;
    errCode: string;
    constructor(status: number = 500, errCode: string = "ERR-Global", message: string = "global.error.message") {
        super(message);
        this.name = "ServerError";
        this.status = status;
        this.message = message;

        Object.setPrototypeOf(this, ServerError.prototype);
    }
}

export const sendError = (res: Response, error: ServerError) => {
    res.status(error.status).json({
        status: error.status,
        message: error.message,
        errCode: error.errCode
    });
}

export const sendManuallyError = (res: Response, status: number, message: string, errCode: string) => {
    res.status(status).json({
        status,
        errCode,
        message
    });
}

export const sendResponse = (res: Response, status: number, data: any) => {
    res.status(status).json({
        status,
        data
    });
}

export enum StatusCode {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    EARLY_HINTS = 103,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    ALREADY_REPORTED = 208,
    IM_USED = 226,
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    VARIANT_ALSO_NEGOTIATES = 506,
    INSUFFICIENT_STORAGE = 507,
    LOOP_DETECTED = 508,
    CONNECTION_TIMED_OUT = 522,
}