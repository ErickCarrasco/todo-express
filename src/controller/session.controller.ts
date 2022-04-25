import {Request, Response} from 'express'
import { CreateSession, findSessions } from '../service/session.service';
import { validatePassword } from '../service/user.service'
import { signJwt } from '../utils/jwt.utils';
import keys from '../config/keys';

export async function CreateSessionHandler(req: Request, res:Response){
    const user = await validatePassword(req.body)

    if(!user){
        
        return res.status(401).send("Invalid email or password");
    }

    const session = await CreateSession(user._id, req.get("user-agent") || "")
    
    const accessToken = signJwt({
        ...user, session: session._id}, {expiresIn: keys.accessTokenTtl}
    )

    const refreshToken = signJwt({
        ...user, session: session._id}, {expiresIn: keys.accessTokenTtl}
    )

    return res.send({accessToken, refreshToken})

}

export async function getUserSessionsHandler(req: Request, res:Response){

    const userId = res.locals.user._id
    const sessions = await findSessions({user:userId, valid:true})

    return res.send(sessions)
} 