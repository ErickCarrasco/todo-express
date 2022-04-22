import {Schema, model} from 'mongoose';
import UserInterface from '../interfaces/user.interface';
import bcryptjs from "bcryptjs";

const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        unique: true,
        required:true
    },
    password:{
        type: String,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

UserSchema.methods.comparePassword = async function(candidatePassword:string): Promise<boolean>{
    const user = this as UserInterface;
    if(candidatePassword !== user.password) return false;

    return true;
};


const User = model<UserInterface>('user', UserSchema);

export default User;