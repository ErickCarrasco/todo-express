import {Document} from 'mongoose';
import UserInterface from './user.interface'

interface SessionInterface extends Document{
    user: UserInterface["_id"];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
}

export default SessionInterface;