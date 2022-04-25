import {Request, Response, NextFunction} from 'express'
import {get} from 'lodash'
import { verifyJwt } from '../utils/jwt.utils'

const deserializeUser =(req: Request, res: Response, next: NextFunction) => {

    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/,"")
    console.log("access token",accessToken)
    if(!accessToken){
        console.log("No access token")
        return next()
    }

    const {decoded, expired} = verifyJwt(accessToken)
    console.log("decoded", decoded)
    console.log("expired", expired)
    if(decoded){
        res.locals.user = decoded
        return next()
    }else{
        
    }
    return next()

}

export default deserializeUser
