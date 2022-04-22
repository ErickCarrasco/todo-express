import Session from "../model/session.model";

export async function CreateSession(userId: string, userAgent: string){
    const session = await Session.create({user:userId, userAgent})

    return session.toJSON();
}