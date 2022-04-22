import {Schema, model} from 'mongoose';
import UserInterface from '../interfaces/user.interface';

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

const User = model<UserInterface>('user', UserSchema);

export default User;