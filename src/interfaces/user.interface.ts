import {Document} from 'mongoose';

interface UserInterface extends Document{
    name: string;
    password: string;
    email: string;
    createdDate: Date;
    comparePassword(candidatePassword: string): Promise<Boolean>;
}

export default UserInterface;