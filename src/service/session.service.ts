import Session from "../model/session.model";
import SessionInterface from "../interfaces/session.interface";
import {FilterQuery, UpdateQuery} from 'mongoose'
import { verifyJwt } from "../utils/jwt.utils";
import {get} from 'lodash';
import { findUser } from "./user.service";
import { signJwt } from "../utils/jwt.utils";
import keys from "../config/keys";


export async function CreateSession(userId: string, userAgent: string){
    const session = await Session.create({user:userId, userAgent})
    return session.toJSON();
}

export async function findSessions(query:  FilterQuery<SessionInterface> ){
    return Session.find(query).lean()
}

export async function updateSession(query: FilterQuery<SessionInterface>, update: UpdateQuery<SessionInterface>){
    return Session.updateOne(query, update);
}

export async function reIssueAccessToken({refreshToken}:{refreshToken: string}){

    const {decoded}  = verifyJwt(refreshToken);

    if(!decoded || !get(decoded, 'session')){
        return false;
    }

    const session = await Session.findById(get(decoded,"session"))

    if(!session || !session.valid){
        return false;
    }

    const user = await findUser({_id:session.user })

    if(!user) return false;

    const accessToken = signJwt({
        ...user, session: session._id}, {expiresIn: keys.accessTokenTtl}
    )

    return accessToken

}