import {DocumentDefinition, FilterQuery} from 'mongoose'
import UserInterface from '../interfaces/user.interface'
import User from '../model/user.model'
import { omit } from 'lodash'


export async function createUser(input:DocumentDefinition<Omit<UserInterface,'createdDate'| 'comparePassword'>>){
    try{
        return await User.create(input)
    }catch(e: any){
        throw new Error(e)
    }

}

export async function validatePassword({email, password}:{email:string, password:string}){
    const user = await User.findOne({email});
    if(!user){
        return false;
    }

    const isValid = await user.comparePassword(password)
    
    if(!isValid) return false;

    return omit(user.toJSON(), "password");
}

export async function findUser(query: FilterQuery<UserInterface>){
    return User.findOne(query).lean()
}