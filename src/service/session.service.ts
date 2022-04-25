import Session from "../model/session.model";
import SessionInterface from "../interfaces/session.interface";
import {FilterQuery} from 'mongoose'

export async function CreateSession(userId: string, userAgent: string){
    const session = await Session.create({user:userId, userAgent})
    return session.toJSON();
}

export async function findSessions(query:  FilterQuery<SessionInterface> ){
    console.log("query session service", query)
    return Session.find(query).lean()

}