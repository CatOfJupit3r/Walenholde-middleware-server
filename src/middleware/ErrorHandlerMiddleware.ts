import { NextFunction, Request, Response } from 'express'
import { Exception } from '../models/ErrorModels'

export const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Exception) {
        res.status(err.status).json({ message: err.message, ...err.additionalData })
    } else {
        console.log('Caught undocumented error:', err)
        res.status(500).json({ message: 'Internal server error' })
        next(err)
    }
}
