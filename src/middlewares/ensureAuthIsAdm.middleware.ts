import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const ensureAuthIsAdmMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    
    if (req.method === 'PATCH') {
        if(req.user.isAdm) {
            next()
        }
        return res.status(401).json({message: 'Unauthorized'})
    }

    if (req.user.id === req.params.id) {
        return next()
    }

    
    if (!req.user.isAdm) {
        return res.status(403).json({
            message: "User is not admin"
        })
    }

    return next()
}

export default ensureAuthIsAdmMiddleware;