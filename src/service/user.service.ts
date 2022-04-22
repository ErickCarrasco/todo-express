import {DocumentDefinition} from 'mongoose'
import UserInterface from '../interfaces/user.interface'
import User from '../model/user.model'

export async function createUser(input:DocumentDefinition<Omit<UserInterface,'createdDate'>>){
    try{
        return await User.create(input)
    }catch(e: any){
        throw new Error(e)
    }

}